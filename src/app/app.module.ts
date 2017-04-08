import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { CatalogModule } from './catalog/catalog.module';
import { CoreModule } from './core/core.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyDon0oS97ueY40GbgplI97GSojhXGIT8gw',
  authDomain: 'frontend-tube.firebaseapp.com',
  databaseURL: 'https://frontend-tube.firebaseio.com',
  projectId: 'frontend-tube',
  storageBucket: 'frontend-tube.appspot.com',
  messagingSenderId: '502261086087'
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BookmarksComponent,
    HistoryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CoreModule,
    SharedModule,
    AppRoutingModule,
    CatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
