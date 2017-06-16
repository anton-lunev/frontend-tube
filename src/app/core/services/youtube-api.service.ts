import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { YouTubeChannel, YouTubeList, YouTubePlaylist, YouTubePlaylistItem, YouTubeSubscription } from './youtube-api';

@Injectable()
export class YoutubeApiService {
  private key = 'AIzaSyCZ9MTPVZ5deD2zBC-MzZSGLtDKSFqdr4s';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  private channels: YouTubeList<YouTubeSubscription>;

  constructor(private http: Http) {
  }

  getChannelsById(ids: string[]): Observable<YouTubeChannel[]> {
    const params = this.getParams({id: ids.join(',')});

    return this.http
      .get(`${this.apiUrl}/channels`, {search: params})
      .map(response => response.json().items);
  }

  getChannels(): Observable<YouTubeSubscription[]> {
    const params = this.getParams({
      part: 'snippet,contentDetails',
      channelId: 'UCgLbP-z8qyzuAlgY-tZdS6Q',
      maxResults: '50',
    });

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

  getPlaylists(ids: string[]): Observable<YouTubePlaylist[]> {
    const params = this.getParams({part: 'snippet,contentDetails', id: ids.join(',')});

    return this.http
      .get(`${this.apiUrl}/playlists`, {search: params})
      .map(response => response.json().items);
  }

  getPlaylist(id: string): Observable<YouTubePlaylistItem[]> {
    const params = this.getParams({'playlistId': id});

    return this.http
      .get(`${this.apiUrl}/playlistItems`, {search: params})
      .map(response => response.json().items);
  }

  private getParams(newParams?: Object): URLSearchParams {
    const params = new URLSearchParams();
    params.set('key', this.key);
    params.set('part', 'snippet');

    for (const prop in newParams) {
      if (newParams.hasOwnProperty(prop)) {
        params.set(prop, newParams[prop]);
      }
    }

    return params;
  }
}
