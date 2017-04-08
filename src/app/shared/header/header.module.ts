import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ImageModule } from '../image/image.module';

@NgModule({
  imports: [
    CommonModule,
    ImageModule
  ],
  declarations: [HeaderComponent, UserMenuComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
