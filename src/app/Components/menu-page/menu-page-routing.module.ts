import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPageComponent } from './menu-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule,
    FormsModule,
    IonicModule],
  exports: [RouterModule],
})
export class MenuPagePageRoutingModule {}
