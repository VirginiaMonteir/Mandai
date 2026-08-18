import { Restaurant, MenuItem, MenuCategory } from '../../domain/restaurant/Restaurant.js';

// Dados simulados de restaurantes
const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Restaurante Saboroso",
    description: "Comida brasileira autêntica com temperos especiais da casa.",
    rating: 4.8,
    deliveryTime: "30-45 min",
    deliveryFee: 5.90,
  },
  {
    id: 2,
    name: "Sushi Delícia",
    description: "Sushis e sashimis frescos preparados por mestres.",
    rating: 4.9,
    deliveryTime: "40-50 min",
    deliveryFee: 7.90,
  },
  {
    id: 3,
    name: "Café Expresso",
    description: "Cafés especiais e lanches leves.",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 3.90,
  }
];

// Dados simulados de itens do menu
const mockMenuItems: MenuItem[] = [
  // Itens do Restaurante Saboroso
  {
    id: 101,
    restaurantId: 1,
    name: "Pizza Margherita",
    description: "Molho de tomate, mussarela e manjericão fresco",
    price: 39.90,
    category: "Pizzas"
  },
  {
    id: 102,
    restaurantId: 1,
    name: "Hamburguer Artesanal",
    description: "Hamburguer 180g, queijo cheddar, alface e tomate",
    price: 29.90,
    category: "Hamburguers"
  },
  {
    id: 103,
    restaurantId: 1,
    name: "Salada Caesar",
    description: "Alface, croutons, queijo parmesão e molho caesar",
    price: 24.90,
    category: "Saladas"
  },
  {
    id: 104,
    restaurantId: 1,
    name: "Refrigerante Coca-Cola 2L",
    description: "Refrigerante gelado",
    price: 12.90,
    category: "Bebidas"
  },
  
  // Itens do Sushi Delícia
  {
    id: 201,
    restaurantId: 2,
    name: "Combo Sushi Tradicional",
    description: "12 peças variadas de sushi tradicional",
    price: 59.90,
    category: "Combos"
  },
  {
    id: 202,
    restaurantId: 2,
    name: "Temaki California",
    description: "Temaki com crab stick, pepino e manga",
    price: 22.90,
    category: "Temakis"
  },
  {
    id: 203,
    restaurantId: 2,
    name: "Hot Roll Salmão",
    description: "Salmão, arroz e cream cheese empanados",
    price: 19.90,
    category: "Hot Rolls"
  },
  
  // Itens do Café Expresso
  {
    id: 301,
    restaurantId: 3,
    name: "Café Expresso",
    description: "Café forte e encorpado",
    price: 4.90,
    category: "Cafés"
  },
  {
    id: 302,
    restaurantId: 3,
    name: "Cappuccino",
    description: "Café com leite vaporizado e espuma",
    price: 7.90,
    category: "Cafés"
  },
  {
    id: 303,
    restaurantId: 3,
    name: "Croissant de Presunto e Queijo",
    description: "Croissant recheado com presunto e queijo",
    price: 12.90,
    category: "Lanches"
  }
];

export class RestaurantRepository {
  async findAll(): Promise<Restaurant[]> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockRestaurants;
  }

  async findById(id: number): Promise<Restaurant | undefined> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockRestaurants.find(restaurant => restaurant.id === id);
  }

  async findMenuItemsByRestaurantId(restaurantId: number): Promise<MenuItem[]> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockMenuItems.filter(item => item.restaurantId === restaurantId);
  }

  async findMenuItemsByCategory(restaurantId: number, category: string): Promise<MenuItem[]> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockMenuItems.filter(
      item => item.restaurantId === restaurantId && item.category === category
    );
  }

  async searchMenuItems(restaurantId: number, searchTerm: string): Promise<MenuItem[]> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    
    return mockMenuItems.filter(
      item => 
        item.restaurantId === restaurantId &&
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  async findCategoriesByRestaurantId(restaurantId: number): Promise<MenuCategory[]> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    
    const restaurantItems = mockMenuItems.filter(item => item.restaurantId === restaurantId);
    const categories = Array.from(new Set(restaurantItems.map(item => item.category)));
    
    return categories.map(category => ({
      id: Math.floor(Math.random() * 1000),
      restaurantId,
      name: category,
      items: restaurantItems.filter(item => item.category === category)
    }));
  }
}