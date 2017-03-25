import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent, pathMatch: 'full'},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
