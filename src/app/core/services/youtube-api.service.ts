import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class YoutubeApiService {
  private key = 'AIzaSyClORzAyqaTgzj4M5twnlvLX2zohH1Auc0';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: Http) {
  }

  getChannels(ids: string[]) {
    const params = this.getDefaultParams();
    params.set('id', ids.join(','));

    return this.http
      .get(`${this.apiUrl}/channels`, {search: params})
      .map(response => response.json().items);
  }

  private getDefaultParams(): URLSearchParams {
    const params = new URLSearchParams();
    params.set('key', this.key);
    params.set('part', 'snippet');
    return params;
  }
}
