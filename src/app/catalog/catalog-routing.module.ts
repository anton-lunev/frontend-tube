import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { ChannelsListComponent } from './channels-list/channels-list.component';
import { catalogTypes } from './catalog-list/catalog-list-types';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      {path: '', redirectTo: 'languages', pathMatch: 'full'},
      {path: 'languages', component: CatalogListComponent, data: {type: catalogTypes.LANGUAGES}},
      {path: 'frameworks', component: CatalogListComponent, data: {type: catalogTypes.FRAMEWORKS}},
      {path: 'libraries', component: CatalogListComponent, data: {type: catalogTypes.LIBRARIES}},
      {path: 'tools', component: CatalogListComponent, data: {type: catalogTypes.TOOLS}},
      {path: 'channels', component: ChannelsListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
