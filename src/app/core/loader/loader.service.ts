import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderService {
  private subject = new Subject();
  private channel = this.subject.asObservable();

  constructor() {
  }

  getProgress(): Observable<boolean> {
    return this.channel;
  }

  runProgress() {
    this.subject.next(true);
  }

  stopProgress() {
    this.subject.next(false);
  }
}
