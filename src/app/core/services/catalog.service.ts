import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishReplay';
import { CatalogItem, Catalogs } from './catalog';

@Injectable()
export class CatalogService {
  baseUrl = 'assets/mocks';
  collection$: Observable<Catalogs>;
  channels: Object[];

  constructor(private http: Http) {
  }

  getCatalog(type: string): Observable<CatalogItem[]> {
    if (!this.collection$) {
      this.collection$ = this.http.get(`${this.baseUrl}/catalog.json`)
        .map(res => res.json())
        .publishReplay(1).refCount();
    }
    return this.collection$.map(collection => collection[type]);
  }

  getSubCatalog(type: string, id: string): Observable<CatalogItem> {
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
