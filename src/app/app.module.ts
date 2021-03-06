import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { CatalogModule } from './catalog/catalog.module';
import { CoreModule } from './core/core.module';
import { WatchModule } from './watch/watch.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BookmarksComponent,
    HistoryComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    CatalogModule,
    WatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
