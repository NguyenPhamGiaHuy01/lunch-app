import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CalendarComponentComponent } from './calendar-component.component';


@NgModule({
  declarations: [CalendarComponentComponent],
  exports:[CalendarComponentComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CalendarComponentModule { }
