import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { IconsSpriteComponent } from './icons-sprite/icons-sprite.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule
  ],
  declarations: [IconsSpriteComponent, IconComponent, ImageComponent],
  exports: [HeaderModule, IconsSpriteComponent, IconComponent, ImageComponent]
})
export class SharedModule {
}
