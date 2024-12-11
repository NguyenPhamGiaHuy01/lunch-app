import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private menuMain = [
   { id: "1", name: 'Cơm gà', description: 'Cơm gà chiên rau củ', day: 'Monday', menuDessert: [
    { id: "1", name: "Xoài" },
    { id: "2", name: "Ổi" },
    { id: "3", name: "Mận" }
  ] },
    { id: "2", name: 'Bún bò', description: 'Bún bò Huế', day: 'Monday',menuDessert: [
      { id: "1", name: "Xoài" },
      { id: "2", name: "Ổi" },
      { id: "3", name: "Mận" }
    ] },
    { id: "3", name: 'Phở bò', description: 'Phở bò truyền thống', day: 'Wednesday',menuDessert: [
      { id: "1", name: "Xoài" },
      { id: "2", name: "Ổi" },
      { id: "3", name: "Mận" }
    ] },
  ];

  

  getTodayMenu(selectDay: string) {
    
    return this.menuMain.filter(item => item.day === selectDay);
  }

  getFoodDetails(foodId: string){
    return this.menuMain.find(item => item.id === foodId)
  }


}
