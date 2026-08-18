import { RestaurantService } from '../../../application/restaurant/RestaurantService.js';

const restaurantService = new RestaurantService();

export const restaurantRoutes = async (app: any) => {
  // Obter todos os restaurantes
  app.get('/restaurants', async (_: any, reply: any) => {
    try {
      const restaurants = await restaurantService.getAllRestaurants();
      return reply.send(restaurants);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar restaurantes' });
    }
  });

  // Obter um restaurante pelo ID
  app.get('/restaurants/:id', async (request: any, reply: any) => {
    try {
      const { id } = request.params as { id: string };
      const restaurantId = parseInt(id, 10);
      
      if (isNaN(restaurantId)) {
        return reply.status(400).send({ error: 'ID do restaurante inválido' });
      }
      
      const restaurant = await restaurantService.getRestaurantById(restaurantId);
      
      if (!restaurant) {
        return reply.status(404).send({ error: 'Restaurante não encontrado' });
      }
      
      return reply.send(restaurant);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar restaurante' });
    }
  });

  // Obter todos os itens do menu de um restaurante
  app.get('/restaurants/:id/menu', async (request: any, reply: any) => {
    try {
      const { id } = request.params as { id: string };
      const restaurantId = parseInt(id, 10);
      
      if (isNaN(restaurantId)) {
        return reply.status(400).send({ error: 'ID do restaurante inválido' });
      }
      
      const menuItems = await restaurantService.getMenuItemsByRestaurantId(restaurantId);
      return reply.send(menuItems);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar itens do menu' });
    }
  });

  // Obter itens do menu por categoria
  app.get('/restaurants/:id/menu/category/:category', async (request: any, reply: any) => {
    try {
      const { id, category } = request.params as { id: string; category: string };
      const restaurantId = parseInt(id, 10);
      
      if (isNaN(restaurantId)) {
        return reply.status(400).send({ error: 'ID do restaurante inválido' });
      }
      
      const menuItems = await restaurantService.getMenuItemsByCategory(restaurantId, category);
      return reply.send(menuItems);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar itens do menu por categoria' });
    }
  });

  // Pesquisar itens do menu
  app.get('/restaurants/:id/menu/search', async (request: any, reply: any) => {
    try {
      const { id } = request.params as { id: string };
      const { q } = request.query as { q: string };
      const restaurantId = parseInt(id, 10);
      
      if (isNaN(restaurantId)) {
        return reply.status(400).send({ error: 'ID do restaurante inválido' });
      }
      
      if (!q) {
        return reply.status(400).send({ error: 'Parâmetro de busca não informado' });
      }
      
      const menuItems = await restaurantService.searchMenuItems(restaurantId, q);
      return reply.send(menuItems);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar itens do menu' });
    }
  });

  // Obter categorias do menu
  app.get('/restaurants/:id/menu/categories', async (request: any, reply: any) => {
    try {
      const { id } = request.params as { id: string };
      const restaurantId = parseInt(id, 10);
      
      if (isNaN(restaurantId)) {
        return reply.status(400).send({ error: 'ID do restaurante inválido' });
      }
      
      const categories = await restaurantService.getMenuCategories(restaurantId);
      return reply.send(categories);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar categorias do menu' });
    }
  });
};