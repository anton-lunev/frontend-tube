import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SharedModule } from './shared/shared.module';
import { CatalogComponent } from './catalog/catalog.component';
import { AppRoutingModule } from './app-routing.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CatalogComponent,
    BookmarksComponent,
    HistoryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
