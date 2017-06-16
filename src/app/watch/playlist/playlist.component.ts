import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../core/services/youtube-api.service';
import { CatalogService } from '../../core/services/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../core/loader/loader.service';
import { YouTubePlaylistItem } from '../../core/services/youtube-api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {
  baseUrl = 'https://www.youtube.com/embed/';
  videoUrl: SafeResourceUrl;
  playlistItems: YouTubePlaylistItem[];

  constructor(private youtubeApiService: YoutubeApiService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.runProgress();
    this.route.params
      .switchMap(params => this.youtubeApiService.getPlaylist(params.playlistId))
      // .switchMap(items => {
      //   this.catalogCollection = items.collection;
      //   this.catalogId = items.name;
      //   return this.youtubeApiService.getPlaylist();
      // })
      // .switchMap(channels => {
      //   this.channels = channels;
      //   return this.youtubeApiService.getPlaylists(this.catalogCollection.map(ch => ch.id));
      // })
      .subscribe(playlistItems => {
        this.playlistItems = playlistItems;
        this.setUrl();
        this.loaderService.stopProgress();
      });
  }

  setUrl() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.baseUrl + this.playlistItems[0].snippet.resourceId.videoId + '?autoplay=1&rel=0'
    );
  }
}
