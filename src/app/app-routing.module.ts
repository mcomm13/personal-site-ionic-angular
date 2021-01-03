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
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'web-apps',
    loadChildren: () => import('./pages/web-apps/web-apps.module').then(m => m.WebAppsPageModule),
  },
  {
    path: 'mobile-apps',
    loadChildren: () => import('./pages/mobile-apps/mobile-apps.module').then(m => m.MobileAppsPageModule),
  },
  {
    path: 'resume',
    loadChildren: () => import('./pages/resume/resume.module').then(m => m.ResumePageModule),
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogPageModule),
  },
  {
    path: 'blog/:id',
    loadChildren: () => import('./pages/blog-detail/blog-detail.module').then(m => m.BlogDetailPageModule),
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/music/music.module').then(m => m.MusicPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
