import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { ChannelsListComponent } from './channels-list/channels-list.component';
import { catalogTypes } from './catalog-list/catalog-list-types';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      {path: '', redirectTo: 'languages', pathMatch: 'full'},
      {path: 'channels', component: ChannelsListComponent},
      {path: ':type', component: CatalogListComponent},
      {path: ':type/:id', component: VideoListComponent},
      // {path: 'frameworks', component: CatalogListComponent, data: {type: catalogTypes.FRAMEWORKS}},
      // {path: 'libraries', component: CatalogListComponent, data: {type: catalogTypes.LIBRARIES}},
      // {path: 'tools', component: CatalogListComponent, data: {type: catalogTypes.TOOLS}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
