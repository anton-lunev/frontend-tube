import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, UserMenuComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
