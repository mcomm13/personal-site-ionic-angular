import { SafeResourceUrl } from '@angular/platform-browser';

export interface Blog {
  _id: string;
  title: string;
  date: string;
  content: string;
  author: string;
  youtubeUrl?: string;
  sanitizedUrl?: SafeResourceUrl;
}
