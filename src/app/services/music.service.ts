import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  getMyMusic(): Promise<any> {
    return (
      this.http
        // .get('https://mcomm-ts-express-api.azurewebsites.net/api/music')
        .get('http://mcomm-web-api.azurewebsites.net/api/music')
        .toPromise()
        .then((songs: any) => {
          return songs && songs.data;
        })
    );
  }
}
