import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../core/services/youtube-api.service';
import { CatalogService } from '../../core/services/catalog.service';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../core/loader/loader.service';
import { YouTubeChannel, YouTubePlaylist, YouTubeSubscription } from '../../core/services/youtube-api';
import 'rxjs/add/operator/switchMap';
import { SubCatalogItem } from '../../core/services/catalog';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.less']
})
export class VideoListComponent implements OnInit {
  catalogId: string;
  catalogCollection: SubCatalogItem[];
  playlists: YouTubePlaylist[] = [];
  channels: YouTubeSubscription[];

  constructor(private youtubeApiService: YoutubeApiService,
              private catalogService: CatalogService,
              private route: ActivatedRoute,
              private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.runProgress();
    this.route.params
      .switchMap(params => this.catalogService.getSubCatalog(params.type, params.id))
      .switchMap(items => {
        this.catalogCollection = items.collection;
        this.catalogId = items.name;
        return this.youtubeApiService.getChannels();
      })
      .switchMap(channels => {
        this.channels = channels;
        return this.youtubeApiService.getPlaylists(this.catalogCollection.map(ch => ch.id));
      })
      .subscribe(playlists => {
        this.playlists = playlists;
        this.loaderService.stopProgress();
      });
  }

  getChannelLogo(channelId: string) {
    const channel = this.channels.find(ch => ch.snippet.resourceId.channelId === channelId);
    if (!channel) {
      return '';
    }
    return channel.snippet.thumbnails.medium.url;
  }
}
