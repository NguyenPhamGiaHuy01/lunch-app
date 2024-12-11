import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { HomePagePage } from './home-page.page';
import { HomePagePageRoutingModule } from './home-page-routing.module';
import { MenuPagePageModule } from '../../Components/menu-page/menu-page.module';
import { CalendarComponentModule } from 'src/app/Components/Calendar/calendar-component/calendar-component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule,
    MenuPagePageModule,
    CalendarComponentModule
  ],
  declarations: [HomePagePage]
})
export class HomePagePageModule {}
