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

  export interface Provinces{
    province_name: string 
    province_id: number | string
    district_id: number | string
    district_name: string
    commune_name: string
    commune_id: number | string
  }

  export interface Province{
    province_name: string
    province_id: number | string
  }

  export interface District{
    district_id: number | string
    district_name: string
  }

  export interface Commune{
    commune_id: number | string
    commune_name: string
    
  }

