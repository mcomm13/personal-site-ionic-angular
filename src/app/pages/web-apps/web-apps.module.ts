import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebAppsPageRoutingModule } from './web-apps-routing.module';

import { WebAppsPage } from './web-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebAppsPageRoutingModule
  ],
  declarations: [WebAppsPage]
})
export class WebAppsPageModule {}
