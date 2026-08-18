// Serviço para buscar dados de restaurantes e produtos
// Em uma aplicação real, isso faria chamadas HTTP para a API backend

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image?: string;
  menu?: MenuItem[]; // Tornar opcional pois será carregado separadamente
}

export interface MenuCategory {
  id: number;
  restaurantId: number;
  name: string;
  items: MenuItem[];
}

const API_BASE_URL = 'http://localhost:3001/api/v1';

// Função para buscar todos os restaurantes
export async function getAllRestaurants(): Promise<Restaurant[]> {
  try {
    console.log('Fetching restaurants from:', `${API_BASE_URL}/restaurants`);
    const response = await fetch(`${API_BASE_URL}/restaurants`);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const restaurants = await response.json();
    console.log('Received restaurants:', restaurants);
    
    // Adicionar menu vazio para compatibilidade com o frontend
    return restaurants.map((restaurant: any) => ({
      ...restaurant,
      menu: [] // Será carregado quando necessário
    }));
  } catch (error) {
    console.error('Erro ao buscar restaurantes:', error);
    throw error;
  }
}

// Função para buscar um restaurante específico pelo ID
export async function getRestaurantById(id: number): Promise<Restaurant | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        return undefined;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const restaurant = await response.json();
    
    // Buscar o menu do restaurante
    try {
      const menuResponse = await fetch(`${API_BASE_URL}/restaurants/${id}/menu`);
      if (menuResponse.ok) {
        const menu = await menuResponse.json();
        return {
          ...restaurant,
          menu
        };
      }
    } catch (menuError) {
      console.warn('Não foi possível carregar o menu do restaurante:', menuError);
    }
    
    return {
      ...restaurant,
      menu: []
    };
  } catch (error) {
    console.error('Erro ao buscar restaurante:', error);
    throw error;
  }
}

// Função para buscar itens do menu por categoria
export async function getMenuItemsByCategory(restaurantId: number, category: string): Promise<MenuItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}/menu/category/${category}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar itens do menu por categoria:', error);
    return [];
  }
}

// Função para buscar itens do menu por nome
export async function searchMenuItems(restaurantId: number, searchTerm: string): Promise<MenuItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}/menu/search?q=${encodeURIComponent(searchTerm)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar itens do menu:', error);
    return [];
  }
}

// Função para buscar todas as categorias disponíveis
export async function getAllCategories(): Promise<string[]> {
  try {
    // Como a API não tem um endpoint para todas as categorias de todos os restaurantes,
    // vamos buscar os restaurantes e extrair as categorias
    const restaurants = await getAllRestaurants();
    const categoriesSet = new Set<string>();
    
    for (const restaurant of restaurants) {
      try {
        const response = await fetch(`${API_BASE_URL}/restaurants/${restaurant.id}/menu/categories`);
        if (response.ok) {
          const categories: MenuCategory[] = await response.json();
          categories.forEach(category => categoriesSet.add(category.name));
        }
      } catch (error) {
        console.warn(`Não foi possível carregar categorias do restaurante ${restaurant.id}:`, error);
      }
    }
    
    return Array.from(categoriesSet);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
}

// Função para buscar categorias de um restaurante específico
export async function getCategoriesByRestaurantId(restaurantId: number): Promise<MenuCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${restaurantId}/menu/categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar categorias do restaurante:', error);
    return [];
  }
}