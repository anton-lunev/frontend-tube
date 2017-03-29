import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'load-image',
  template: `<div class="img-container" [class.loaded]="loaded">
               <img [src]="src" [alt]="alt" (load)="onLoad()" [class.round]="round">
             </div>`,
  styleUrls: ['./image.component.less']
})
export class ImageComponent implements OnInit {
  @Input() src: String = '';
  @Input() alt: String = '';
  @Input() round: Boolean = false;
  loaded = false;

  constructor() {
  }

  ngOnInit() {
  }

  onLoad() {
    this.loaded = true;
  }
}
