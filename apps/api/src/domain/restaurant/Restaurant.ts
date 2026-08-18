export interface Restaurant {
  id: number;
  name: string;
  description: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image?: string;
}

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export interface MenuCategory {
  id: number;
  restaurantId: number;
  name: string;
  items: MenuItem[];
}