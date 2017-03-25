import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { IconsSpriteComponent } from './icons-sprite/icons-sprite.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [IconsSpriteComponent, IconComponent],
  exports: [HeaderModule, IconsSpriteComponent, IconComponent]
})
export class SharedModule {
}
