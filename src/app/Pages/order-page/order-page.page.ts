import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { MenuMain } from 'src/app/API/ApiResult';
import { MenuServiceService } from 'src/app/Service/MenuService/menu-service.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.page.html',
  styleUrls: ['./order-page.page.scss'],
})
export class OrderPagePage implements OnInit {
  private menuService = inject(MenuServiceService)
  public food: WritableSignal<MenuMain | null> = signal(null)

  @Input()
  set id(foodId: string){
    //console.log(foodId)
   // Fetch food details
  const foodDetails = this.menuService.getFoodDetails(foodId);
   if (foodDetails) {
    this.food.set(foodDetails);
   
    //console.log(foodDetails)
   } else {
    console.error(`Food with ID ${foodId} not found`);
   }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
