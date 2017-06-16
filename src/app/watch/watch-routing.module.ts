import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchComponent } from './watch.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {
    path: 'watch',
    component: WatchComponent,
    children: [
      // {path: '', redirectTo: 'languages', pathMatch: 'full'},
      {path: 'playlist/:playlistId', component: PlaylistComponent},
      {path: 'playlist/:playlistId/video/:videoId', component: PlaylistComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchRoutingModule {
}
