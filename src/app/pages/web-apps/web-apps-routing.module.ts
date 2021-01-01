import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebAppsPage } from './web-apps.page';

const routes: Routes = [
  {
    path: '',
    component: WebAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebAppsPageRoutingModule {}
