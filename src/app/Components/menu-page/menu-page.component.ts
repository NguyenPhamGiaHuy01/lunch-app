import { Component, EventEmitter, inject, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MenuServiceService } from 'src/app/Service/MenuService/menu-service.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit  {

  private menuService = inject(MenuServiceService)
  @Input()
  dateTimeEvent: string[] | undefined
  
  todayMenu: any[] = [];
  
  constructor() {
   
    
    
   }
   // This hook is triggered whenever an @Input() property changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dateTimeEvent']) {
      console.log('dateTimeEvent changed:', changes['dateTimeEvent'].currentValue);

      // Handle the updated dateTimeEvent as needed
      if (this.dateTimeEvent) {
        const [day, month, year, dayOfWeek] = this.dateTimeEvent;
        this.showFood(dayOfWeek)
       // console.log(`Updated date: ${day}/${month}/${year} (Day: ${dayOfWeek})`);
      }
    }
  }
  ngOnInit(): void {
    
   
  }
  
  showFood(day: string){
    this.todayMenu = this.menuService.getTodayMenu(day);
    console.log(this.todayMenu)
  }

   order(item: any) {
    console.log('Đặt món:', item.name);
  }

}
