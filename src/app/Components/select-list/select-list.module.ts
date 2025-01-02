import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SelectListComponent } from './select-list.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [SelectListComponent, FilterPipe],
  exports:[SelectListComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class SelectListModule { }
