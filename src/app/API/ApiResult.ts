interface Dessert {
    id: string;
    name: string;
  }
  
  // Interface for each menu item
  export interface MenuMain {
    id: string;
    name: string;
    description: string;
    day: string;
    menuDessert: Dessert[]; // Array of desserts
  }