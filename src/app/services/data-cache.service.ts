import { Injectable } from '@angular/core';

interface BlogItem {
  title: string;
  date: string;
  content: string;
  author: string;
}

interface Song {
  artist: string;
  date: string;
  description: string;
  title: string;
  url: string;
  year: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataCacheService {
  cachedBlogData: BlogItem[];
  cachedMusicData: Song[];

  constructor() {}

  cacheBlogData(data: BlogItem[]) {
    this.cachedBlogData = data;
  }

  getCachedBlogData(): BlogItem[] {
    return this.cachedBlogData || [];
  }

  cacheMusicData(data: Song[]) {
    this.cachedMusicData = data;
  }

  getCachedMusicData(): Song[] {
    return this.cachedMusicData || [];
  }
}
