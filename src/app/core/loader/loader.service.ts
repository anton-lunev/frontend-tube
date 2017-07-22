import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderService {
  private subject: Subject<boolean> = new Subject();
  private channel: Observable<boolean> = this.subject.asObservable();

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
