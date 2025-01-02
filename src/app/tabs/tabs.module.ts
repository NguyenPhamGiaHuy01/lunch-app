import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { AdminPagePageModule } from '../Pages/admin-page/admin-page.module';

import { HomePagePageModule } from '../Pages/home-page/home-page.module';
import { RegisterPagePageModule } from '../Pages/register-page/register-page/register-page.module';
import { HomePagePageRoutingModule } from '../Pages/home-page/home-page-routing.module';
import { MenuPagePageModule } from '../Components/menu-page/menu-page.module';
import { CalendarComponentModule } from '../Components/Calendar/calendar-component/calendar-component.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePagePageRoutingModule,
    RegisterPagePageModule,
    AdminPagePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
