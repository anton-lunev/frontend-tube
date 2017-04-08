import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { IconsSpriteComponent } from './icons-sprite/icons-sprite.component';
import { IconComponent } from './icon/icon.component';
import { ImageModule } from './image/image.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ImageModule
  ],
  declarations: [IconsSpriteComponent, IconComponent],
  exports: [HeaderModule, ImageModule, IconsSpriteComponent, IconComponent]
})
export class SharedModule {
}
