import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../shared/shared.module';
import { CatalogMenuComponent } from './catalog-menu/catalog-menu.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { FrameworksListComponent } from './frameworks-list/frameworks-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    CatalogMenuComponent,
    LanguagesListComponent,
    FrameworksListComponent
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule {
}
