import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileAppsPageRoutingModule } from './mobile-apps-routing.module';

import { MobileAppsPage } from './mobile-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileAppsPageRoutingModule
  ],
  declarations: [MobileAppsPage]
})
export class MobileAppsPageModule {}
