import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class CatalogService {
  collection: Object;

  constructor(private http: Http) {
  }

  getCatalog(type: string): Observable<Object[]> {
    if (!this.collection) {
      return this.http.get('assets/mocks/catalog.json')
        .map((res: Response) => {
          this.collection = res.json();
          return this.collection[type];
        });
    }
    return Observable.of(this.collection[type]);
  }
}
