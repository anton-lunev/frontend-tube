import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './services/catalog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CatalogService],
  declarations: []
})
export class CoreModule { }
