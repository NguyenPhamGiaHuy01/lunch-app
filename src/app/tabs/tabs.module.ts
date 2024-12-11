import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { AdminPagePageModule } from '../Pages/admin-page/admin-page.module';

import { HomePagePageModule } from '../Pages/home-page/home-page.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePagePageModule,
    AdminPagePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
