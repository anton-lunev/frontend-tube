import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsSpriteComponent } from './icons-sprite/icons-sprite.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IconsSpriteComponent, IconComponent],
  exports: [IconsSpriteComponent, IconComponent]
})
export class SharedModule { }
