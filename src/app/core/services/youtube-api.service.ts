import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { YouTubeChannel, YouTubeList, YouTubePlaylist, YouTubeSubscription } from './youtube-api';

@Injectable()
export class YoutubeApiService {
  private key = 'AIzaSyCZ9MTPVZ5deD2zBC-MzZSGLtDKSFqdr4s';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private channels: YouTubeList<YouTubeSubscription>;

  constructor(private http: Http) {
  }

  getChannelsById(ids: String[]): Observable<YouTubeChannel[]> {
    const params = this.getDefaultParams();
    params.set('id', ids.join(','));

    return this.http
      .get(`${this.apiUrl}/channels`, {search: params})
      .map(response => response.json().items);
  }

  getChannels(): Observable<YouTubeSubscription[]> {
    const params = this.getDefaultParams();
    params.set('channelId', 'UCgLbP-z8qyzuAlgY-tZdS6Q');
    params.set('maxResults', '50');
    params.set('part', 'snippet,contentDetails');

    if (this.channels) {
      return Observable.of(this.channels.items);
    }

    return this.http
      .get(`${this.apiUrl}/subscriptions`, {search: params})
      .map(response => {
        this.channels = response.json();
        return this.channels.items;
      });
  }

  getPlaylists(ids: String[]): Observable<YouTubePlaylist[]> {
    const params = this.getDefaultParams();
    params.set('part', 'snippet,contentDetails');
    params.set('id', ids.join(','));

    return this.http
      .get(`${this.apiUrl}/playlists`, {search: params})
      .map(response => response.json().items);
  }

  private getDefaultParams(): URLSearchParams {
    const params = new URLSearchParams();
    params.set('key', this.key);
    params.set('part', 'snippet');
    return params;
  }
}
