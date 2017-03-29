import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../core/services/catalog.service';
import { LoaderService } from '../../core/loader/loader.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.less']
})
export class CatalogListComponent implements OnInit {
  catalog: Object[] = [];

  constructor(private route: ActivatedRoute,
              private catalogService: CatalogService,
              private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.runProgress();
    this.catalogService.getCatalog(this.route.snapshot.data.type)
      .subscribe(catalog => {
        this.catalog = catalog;
        this.loaderService.stopProgress();
      });
  }

  getLogoPath(fileName: string) {
    return `assets/images/${fileName}`;
  }
}
