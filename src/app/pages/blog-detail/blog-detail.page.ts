import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { DataCacheService } from '../../services/data-cache.service';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {
  blog: Blog;
  constructor(
    private blogService: BlogService,
    private dataCacheService: DataCacheService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    const cachedBlogData = this.dataCacheService.getCachedBlogData();
    const routeParam = this.route.snapshot.params.id;
    if (cachedBlogData && cachedBlogData.length) {
      this.blog = cachedBlogData.find(item => {
        return item._id === decodeURIComponent(routeParam);
      });
      if (this.blog) {
        this.blog.sanitizedUrl = this.sanitizeUrl(this.blog.youtubeUrl);
      }
    } else {
      this.blogService.getAllBlogPosts().then(blogs => {
        blogs = this.blogService.sortBlogsByDate(blogs || []);
        this.dataCacheService.cacheBlogData(blogs);
        this.blog = blogs.find(item => {
          return item._id === decodeURIComponent(routeParam);
        });
        if (this.blog) {
          this.blog.sanitizedUrl = this.sanitizeUrl(this.blog.youtubeUrl);
        }
      });
    }
  }

  private sanitizeUrl(url) {
    if (url) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      return '';
    }
  }
}
