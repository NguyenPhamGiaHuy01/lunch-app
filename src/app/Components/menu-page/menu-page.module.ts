import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPagePageRoutingModule } from './menu-page-routing.module';

import { MenuPageComponent } from './menu-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPagePageRoutingModule
  ],
  declarations: [MenuPageComponent],
  exports:[MenuPageComponent]
})
export class MenuPagePageModule {}
