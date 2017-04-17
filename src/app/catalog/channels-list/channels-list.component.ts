import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../core/services/catalog.service';
import { YoutubeApiService } from '../../core/services/youtube-api.service';
import { LoaderService } from '../../core/loader/loader.service';
import { YouTubeChannel, YouTubeSubscription } from '../../core/services/youtube-api';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.less']
})
export class ChannelsListComponent implements OnInit {
  channelsDetails: YouTubeSubscription[] = [];

  constructor(private catalogService: CatalogService,
              private youtubeApiService: YoutubeApiService,
              private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.runProgress();
    this.youtubeApiService.getChannels()
      .subscribe(details => {
        this.channelsDetails = details;
        this.loaderService.stopProgress();
      });
  }
}
