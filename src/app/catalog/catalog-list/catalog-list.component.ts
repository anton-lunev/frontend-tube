import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../core/services/catalog.service';
import { LoaderService } from '../../core/loader/loader.service';
import 'rxjs/add/operator/switchMap';
import { CatalogItem } from '../../core/services/catalog';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.less']
})
export class CatalogListComponent implements OnInit {
  catalog: CatalogItem[];

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.runProgress();
    this.route.params
      .switchMap(params => this.catalogService.getCatalog(params.type))
      .subscribe(catalog => {
        this.catalog = catalog;
        this.loaderService.stopProgress();
      });
  }

  getLogoPath(fileName: string) {
    return `assets/images/${fileName}`;
  }
}
