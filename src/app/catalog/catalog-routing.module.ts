import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { FrameworksListComponent } from './frameworks-list/frameworks-list.component';
import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {path: 'languages', component: LanguagesListComponent},
      {path: 'frameworks', component: FrameworksListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {
}
