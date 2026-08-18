import { Restaurant, MenuItem, MenuCategory } from '../../domain/restaurant/Restaurant.js';
import { RestaurantRepository } from '../../infrastructure/restaurant/RestaurantRepository.js';

export class RestaurantService {
  private restaurantRepository: RestaurantRepository;

  constructor() {
    this.restaurantRepository = new RestaurantRepository();
  }

  async getAllRestaurants(): Promise<Restaurant[]> {
    return this.restaurantRepository.findAll();
  }

  async getRestaurantById(id: number): Promise<Restaurant | undefined> {
    return this.restaurantRepository.findById(id);
  }

  async getMenuItemsByRestaurantId(restaurantId: number): Promise<MenuItem[]> {
    return this.restaurantRepository.findMenuItemsByRestaurantId(restaurantId);
  }

  async getMenuItemsByCategory(restaurantId: number, category: string): Promise<MenuItem[]> {
    return this.restaurantRepository.findMenuItemsByCategory(restaurantId, category);
  }

  async searchMenuItems(restaurantId: number, searchTerm: string): Promise<MenuItem[]> {
    return this.restaurantRepository.searchMenuItems(restaurantId, searchTerm);
  }

  async getMenuCategories(restaurantId: number): Promise<MenuCategory[]> {
    return this.restaurantRepository.findCategoriesByRestaurantId(restaurantId);
  }
}