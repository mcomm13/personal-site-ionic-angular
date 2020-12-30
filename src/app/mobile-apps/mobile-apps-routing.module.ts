import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileAppsPage } from './mobile-apps.page';

const routes: Routes = [
  {
    path: '',
    component: MobileAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileAppsPageRoutingModule {}
