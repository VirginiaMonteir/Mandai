// Serviço para buscar dados de restaurantes e produtos
// Em uma aplicação real, isso faria chamadas HTTP para uma API backend

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
}

interface Restaurant {
  id: number;
  name: string;
  description: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image?: string;
  menu: MenuItem[];
}

// Dados simulados de restaurantes
const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Restaurante Saboroso",
    description: "Comida brasileira autêntica com temperos especiais da casa.",
    rating: 4.8,
    deliveryTime: "30-45 min",
    deliveryFee: 5.90,
    menu: [
      {
        id: 101,
        name: "Pizza Margherita",
        description: "Molho de tomate, mussarela e manjericão fresco",
        price: 39.90,
        category: "Pizzas"
      },
      {
        id: 102,
        name: "Hamburguer Artesanal",
        description: "Hamburguer 180g, queijo cheddar, alface e tomate",
        price: 29.90,
        category: "Hamburguers"
      },
      {
        id: 103,
        name: "Salada Caesar",
        description: "Alface, croutons, queijo parmesão e molho caesar",
        price: 24.90,
        category: "Saladas"
      },
      {
        id: 104,
        name: "Refrigerante Coca-Cola 2L",
        description: "Refrigerante gelado",
        price: 12.90,
        category: "Bebidas"
      }
    ]
  },
  {
    id: 2,
    name: "Sushi Delícia",
    description: "Sushis e sashimis frescos preparados por mestres.",
    rating: 4.9,
    deliveryTime: "40-50 min",
    deliveryFee: 7.90,
    menu: [
      {
        id: 201,
        name: "Combo Sushi Tradicional",
        description: "12 peças variadas de sushi tradicional",
        price: 59.90,
        category: "Combos"
      },
      {
        id: 202,
        name: "Temaki California",
        description: "Temaki com crab stick, pepino e manga",
        price: 22.90,
        category: "Temakis"
      },
      {
        id: 203,
        name: "Hot Roll Salmão",
        description: "Salmão, arroz e cream cheese empanados",
        price: 19.90,
        category: "Hot Rolls"
      }
    ]
  },
  {
    id: 3,
    name: "Café Expresso",
    description: "Cafés especiais e lanches leves.",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 3.90,
    menu: [
      {
        id: 301,
        name: "Café Expresso",
        description: "Café forte e encorpado",
        price: 4.90,
        category: "Cafés"
      },
      {
        id: 302,
        name: "Cappuccino",
        description: "Café com leite vaporizado e espuma",
        price: 7.90,
        category: "Cafés"
      },
      {
        id: 303,
        name: "Croissant de Presunto e Queijo",
        description: "Croissant recheado com presunto e queijo",
        price: 12.90,
        category: "Lanches"
      }
    ]
  }
];

// Função para buscar todos os restaurantes
export async function getAllRestaurants(): Promise<Restaurant[]> {
  // Simular latência de rede
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Em uma aplicação real, isso seria:
  // const response = await fetch('/api/restaurants');
  // return response.json();
  
  return mockRestaurants;
}

// Função para buscar um restaurante específico pelo ID
export async function getRestaurantById(id: number): Promise<Restaurant | undefined> {
  // Simular latência de rede
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Em uma aplicação real, isso seria:
  // const response = await fetch(`/api/restaurants/${id}`);
  // return response.json();
  
  return mockRestaurants.find(restaurant => restaurant.id === id);
}

// Função para buscar itens do menu por categoria
export async function getMenuItemsByCategory(restaurantId: number, category: string): Promise<MenuItem[]> {
  // Simular latência de rede
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const restaurant = mockRestaurants.find(r => r.id === restaurantId);
  
  if (!restaurant) {
    return [];
  }
  
  return restaurant.menu.filter(item => item.category === category);
}

// Função para buscar itens do menu por nome
export async function searchMenuItems(restaurantId: number, searchTerm: string): Promise<MenuItem[]> {
  // Simular latência de rede
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const restaurant = mockRestaurants.find(r => r.id === restaurantId);
  
  if (!restaurant) {
    return [];
  }
  
  return restaurant.menu.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Tipo para uso nas páginas
export type { Restaurant, MenuItem };