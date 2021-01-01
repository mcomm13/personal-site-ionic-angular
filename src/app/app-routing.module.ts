import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'web-apps',
    loadChildren: () => import('./web-apps/web-apps.module').then(m => m.WebAppsPageModule),
  },
  {
    path: 'mobile-apps',
    loadChildren: () => import('./mobile-apps/mobile-apps.module').then(m => m.MobileAppsPageModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumePageModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogPageModule),
  },
  {
    path: 'blog/:title',
    loadChildren: () => import('./blog-detail/blog-detail.module').then(m => m.BlogDetailPageModule),
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then(m => m.MusicPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
