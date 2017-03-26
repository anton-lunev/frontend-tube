import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../shared/shared.module';
import { CatalogMenuComponent } from './catalog-menu/catalog-menu.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { ChannelsListComponent } from './channels-list/channels-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    CatalogMenuComponent,
    CatalogListComponent,
    ChannelsListComponent
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule {
}
