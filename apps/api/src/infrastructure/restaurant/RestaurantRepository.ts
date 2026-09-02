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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Sushi Delícia",
    description: "Sushis e sashimis frescos preparados por mestres.",
    rating: 4.9,
    deliveryTime: "40-50 min",
    deliveryFee: 7.90,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Café Expresso",
    description: "Cafés especiais e lanches leves.",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 3.90,
    image: "https://images.unsplash.com/photo-1554161540-48f0480c686d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 102,
    restaurantId: 1,
    name: "Hamburguer Artesanal",
    description: "Hamburguer 180g, queijo cheddar, alface e tomate",
    price: 29.90,
    category: "Hamburguers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 103,
    restaurantId: 1,
    name: "Salada Caesar",
    description: "Alface, croutons, queijo parmesão e molho caesar",
    price: 24.90,
    category: "Saladas",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 104,
    restaurantId: 1,
    name: "Refrigerante Coca-Cola 2L",
    description: "Refrigerante gelado",
    price: 12.90,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  
  // Itens do Sushi Delícia
  {
    id: 201,
    restaurantId: 2,
    name: "Combo Sushi Tradicional",
    description: "12 peças variadas de sushi tradicional",
    price: 59.90,
    category: "Combos",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 202,
    restaurantId: 2,
    name: "Temaki California",
    description: "Temaki com crab stick, pepino e manga",
    price: 22.90,
    category: "Temakis",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 203,
    restaurantId: 2,
    name: "Hot Roll Salmão",
    description: "Salmão, arroz e cream cheese empanados",
    price: 19.90,
    category: "Hot Rolls",
    image: "https://images.unsplash.com/photo-1649151550902-ea2ed4cf63ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  
  // Itens do Café Expresso
  {
    id: 301,
    restaurantId: 3,
    name: "Café Expresso",
    description: "Café forte e encorpado",
    price: 4.90,
    category: "Cafés",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 302,
    restaurantId: 3,
    name: "Cappuccino",
    description: "Café com leite vaporizado e espuma",
    price: 7.90,
    category: "Cafés",
    image: "https://images.unsplash.com/photo-1519153649707-0fc7bc8ae3d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 303,
    restaurantId: 3,
    name: "Croissant de Presunto e Queijo",
    description: "Croissant recheado com presunto e queijo",
    price: 12.90,
    category: "Lanches",
    image: "https://images.unsplash.com/photo-1586985289216-135c41029d7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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