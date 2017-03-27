import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './services/catalog.service';
import { YoutubeApiService } from './services/youtube-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CatalogService, YoutubeApiService],
  declarations: []
})
export class CoreModule { }
