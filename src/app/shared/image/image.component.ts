import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'load-image',
  template: `<div class="img-container" [class.loaded]="loaded">
               <img [src]="src" [alt]="alt" (load)="onLoad()" [class.round]="round" [style.object-fit]="fit">
             </div>`,
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  @Input() src: String = '';
  @Input() alt: String = '';
  @Input() round: Boolean = false;
  @Input() fit: String = 'contain';
  loaded = false;

  constructor() {
  }

  ngOnInit() {
  }

  onLoad() {
    this.loaded = true;
  }
}
