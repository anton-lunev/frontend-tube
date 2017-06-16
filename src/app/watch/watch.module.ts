import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist/playlist.component';
import { WatchComponent } from './watch.component';
import { WatchRoutingModule } from './watch-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WatchRoutingModule
  ],
  declarations: [PlaylistComponent, WatchComponent]
})
export class WatchModule { }
