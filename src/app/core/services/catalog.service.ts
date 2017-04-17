import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { CatalogItem, Catalogs } from './catalog';

@Injectable()
export class CatalogService {
  baseUrl = 'assets/mocks';
  collection: Catalogs;
  channels: Object[];

  constructor(private http: Http) {
  }

  getCatalog(type: string): Observable<CatalogItem[]> {
    if (!this.collection) {
      return this.http.get(`${this.baseUrl}/catalog.json`)
        .map((res: Response) => {
          this.collection = res.json();
          return this.collection[type];
        });
    }
    return Observable.of(this.collection[type]);
  }

  getSubCatalog(type: string, id: String): Observable<CatalogItem> {
    return this.getCatalog(type)
      .map(collection => collection.find(item => item.id === id));
  }

  getChannels(): Observable<any[]> {
    if (!this.channels) {
      return this.http.get(`${this.baseUrl}/channels.json`)
        .map((res: Response) => this.channels = res.json());
    }
    return Observable.of(this.channels);
  }
}
