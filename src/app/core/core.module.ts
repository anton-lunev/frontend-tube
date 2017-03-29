import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './services/catalog.service';
import { YoutubeApiService } from './services/youtube-api.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CatalogService, YoutubeApiService, LoaderService],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class CoreModule { }
