import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../core/services/catalog.service';
import { YoutubeApiService } from '../../core/services/youtube-api.service';
import { LoaderService } from '../../core/loader/loader.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.less']
})
export class ChannelsListComponent implements OnInit {
  channels: Object[] = [];
  channelsDetails: Object[] = [];

  constructor(private catalogService: CatalogService,
              private youtubeApiService: YoutubeApiService,
              private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.runProgress();
    this.catalogService.getChannels()
      .subscribe(channels => {
        this.channels = channels;
        this.getChannelsDetails(channels.map(ch => ch.id));
      });
  }

  getChannelsDetails(ids: string[]) {
    this.youtubeApiService.getChannels(ids)
      .subscribe(details => {
        this.channelsDetails = details;
        // TODO make chane subscriptions
        this.loaderService.stopProgress();
      });
  }
}
