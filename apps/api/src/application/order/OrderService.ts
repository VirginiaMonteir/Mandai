import { Order, OrderItem } from '../../domain/order/Order.js';
import { OrderRepository } from '../../infrastructure/order/OrderRepository.js';

export class OrderService {
  private orderRepository: OrderRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    return this.orderRepository.create(orderData);
  }

  async getOrderById(id: number): Promise<Order | undefined> {
    return this.orderRepository.findById(id);
  }

  async getOrdersByUserId(userId: number): Promise<Order[]> {
    return this.orderRepository.findByUserId(userId);
  }

  async updateOrderStatus(id: number, status: Order['status']): Promise<Order | undefined> {
    return this.orderRepository.updateStatus(id, status);
  }

  async addItemToOrder(orderId: number, itemData: Omit<OrderItem, 'id' | 'orderId'>): Promise<OrderItem> {
    return this.orderRepository.addItemToOrder(orderId, itemData);
  }

  async getOrderItems(orderId: number): Promise<OrderItem[]> {
    return this.orderRepository.getItemsByOrderId(orderId);
  }

  async removeItemFromOrder(orderId: number, itemId: number): Promise<boolean> {
    return this.orderRepository.removeItemFromOrder(orderId, itemId);
  }
}