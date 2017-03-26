import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catalogTypes } from './catalog-list-types';
import { CatalogService } from '../../core/services/catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.less']
})
export class CatalogListComponent implements OnInit {
  catalog: Object[] = [];

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.catalogService.getCatalog(this.route.snapshot.data.type)
      .subscribe(catalog => this.catalog = catalog);
  }

  getLogoPath(fileName: string) {
    return `assets/images/${fileName}`;
  }
}
