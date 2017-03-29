import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  template: '<div class="loader" [class.loader--progress]="loading"></div>',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit {
  loading: Boolean = false;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.getProgress().subscribe(loading => this.loading = loading);
  }
}
