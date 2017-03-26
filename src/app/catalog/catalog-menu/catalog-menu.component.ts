import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'catalog-menu',
  templateUrl: './catalog-menu.component.html',
  styleUrls: ['./catalog-menu.component.less']
})
export class CatalogMenuComponent implements OnInit {
  canHover = !matchMedia('(hover: none)').matches;
  constructor() {
  }

  ngOnInit() {
  }
}
