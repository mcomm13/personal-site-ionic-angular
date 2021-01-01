import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { DataCacheService } from '../../services/data-cache.service';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  blogData: Blog[];
  constructor(private blogService: BlogService, private dataCacheService: DataCacheService) {}

  ngOnInit() {
    const cachedBlogData = this.dataCacheService.getCachedBlogData();
    if (cachedBlogData && cachedBlogData.length) {
      this.blogData = cachedBlogData;
    } else {
      this.blogService.getAllBlogPosts().then(blogs => {
        this.blogData = this.blogService.sortBlogsByDate(blogs || []);
        this.dataCacheService.cacheBlogData(this.blogData);
      });
    }
  }
}
