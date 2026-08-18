import { OrderService } from '../../../application/order/OrderService.js';

const orderService = new OrderService();

export const orderRoutes = async (app: any) => {
  // Criar um novo pedido
  app.post('/orders', async (request: any, reply: any) => {
    try {
      const orderData = request.body as any;
      const order = await orderService.createOrder(orderData);
      return reply.status(201).send(order);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao criar pedido' });
    }
  });

  // Obter um pedido pelo ID
  app.get('/orders/:id', async (request: any, reply: any) => {
    try {
      const { id } = request.params as { id: string };
      const orderId = parseInt(id, 10);
      
      if (isNaN(orderId)) {
        return reply.status(400).send({ error: 'ID do pedido inválido' });
      }
      
      const order = await orderService.getOrderById(orderId);
      
      if (!order) {
        return reply.status(404).send({ error: 'Pedido não encontrado' });
      }
      
      return reply.send(order);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar pedido' });
    }
  });

  // Obter todos os pedidos de um usuário
  app.get('/users/:userId/orders', async (request: any, reply: any) => {
    try {
      const { userId } = request.params as { userId: string };
      const userIdNum = parseInt(userId, 10);
      
      if (isNaN(userIdNum)) {
        return reply.status(400).send({ error: 'ID do usuário inválido' });
      }
      
      const orders = await orderService.getOrdersByUserId(userIdNum);
      return reply.send(orders);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar pedidos do usuário' });
    }
  });

  // Atualizar status do pedido
  app.patch('/orders/:id/status', async (request: any, reply: any) => {
    try {
      const { id } = request.params as { id: string };
      const { status } = request.body as { status: string };
      const orderId = parseInt(id, 10);
      
      if (isNaN(orderId)) {
        return reply.status(400).send({ error: 'ID do pedido inválido' });
      }
      
      const updatedOrder = await orderService.updateOrderStatus(orderId, status as any);
      
      if (!updatedOrder) {
        return reply.status(404).send({ error: 'Pedido não encontrado' });
      }
      
      return reply.send(updatedOrder);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao atualizar status do pedido' });
    }
  });

  // Adicionar item ao pedido
  app.post('/orders/:id/items', async (request: any, reply: any) => {
    try {
      const { id } = request.params as { id: string };
      const itemData = request.body as any;
      const orderId = parseInt(id, 10);
      
      if (isNaN(orderId)) {
        return reply.status(400).send({ error: 'ID do pedido inválido' });
      }
      
      const orderItem = await orderService.addItemToOrder(orderId, itemData);
      return reply.status(201).send(orderItem);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao adicionar item ao pedido' });
    }
  });

  // Obter itens do pedido
  app.get('/orders/:id/items', async (request: any, reply: any) => {
    try {
      const { id } = request.params as { id: string };
      const orderId = parseInt(id, 10);
      
      if (isNaN(orderId)) {
        return reply.status(400).send({ error: 'ID do pedido inválido' });
      }
      
      const orderItems = await orderService.getOrderItems(orderId);
      return reply.send(orderItems);
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao buscar itens do pedido' });
    }
  });

  // Remover item do pedido
  app.delete('/orders/:id/items/:itemId', async (request: any, reply: any) => {
    try {
      const { id, itemId } = request.params as { id: string; itemId: string };
      const orderId = parseInt(id, 10);
      const orderItemId = parseInt(itemId, 10);
      
      if (isNaN(orderId) || isNaN(orderItemId)) {
        return reply.status(400).send({ error: 'IDs inválidos' });
      }
      
      const success = await orderService.removeItemFromOrder(orderId, orderItemId);
      
      if (!success) {
        return reply.status(404).send({ error: 'Item não encontrado no pedido' });
      }
      
      return reply.send({ message: 'Item removido com sucesso' });
    } catch (error) {
      return reply.status(500).send({ error: 'Erro ao remover item do pedido' });
    }
  });
};