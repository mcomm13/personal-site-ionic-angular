import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root',
})
export class DataCacheService {
  cachedBlogData: Blog[];
  cachedMusicData: Song[];

  constructor() {}

  cacheBlogData(data: Blog[]) {
    this.cachedBlogData = data;
  }

  getCachedBlogData(): Blog[] {
    return this.cachedBlogData || [];
  }

  cacheMusicData(data: Song[]) {
    this.cachedMusicData = data;
  }

  getCachedMusicData(): Song[] {
    return this.cachedMusicData || [];
  }
}
