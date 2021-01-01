import { SafeResourceUrl } from '@angular/platform-browser';

export interface Blog {
  title: string;
  date: string;
  content: string;
  author: string;
  youtubeUrl?: string;
  sanitizedUrl?: SafeResourceUrl;
}
