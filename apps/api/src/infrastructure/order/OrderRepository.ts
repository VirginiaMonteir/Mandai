import { Order, OrderItem } from '../../domain/order/Order.js';

// Dados simulados de pedidos
let mockOrders: Order[] = [];
let mockOrderItems: OrderItem[] = [];
let nextOrderId = 1;
let nextOrderItemId = 1;

export class OrderRepository {
  async create(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const newOrder: Order = {
      id: nextOrderId++,
      userId: orderData.userId,
      status: orderData.status,
      totalAmount: orderData.totalAmount,
      deliveryAddress: orderData.deliveryAddress,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    mockOrders.push(newOrder);
    return newOrder;
  }

  async findById(id: number): Promise<Order | undefined> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockOrders.find(order => order.id === id);
  }

  async findByUserId(userId: number): Promise<Order[]> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockOrders.filter(order => order.userId === userId);
  }

  async updateStatus(id: number, status: Order['status']): Promise<Order | undefined> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    
    const order = mockOrders.find(order => order.id === id);
    if (!order) {
      return undefined;
    }
    
    const updatedOrder: Order = {
      id: order.id,
      userId: order.userId,
      status,
      totalAmount: order.totalAmount,
      deliveryAddress: order.deliveryAddress,
      createdAt: order.createdAt,
      updatedAt: new Date()
    };
    
    const orderIndex = mockOrders.findIndex(o => o.id === id);
    mockOrders[orderIndex] = updatedOrder;
    return updatedOrder;
  }

  async addItemToOrder(orderId: number, itemData: Omit<OrderItem, 'id' | 'orderId'>): Promise<OrderItem> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    
    const newItem: OrderItem = {
      id: nextOrderItemId++,
      orderId,
      menuItemId: itemData.menuItemId,
      menuItemSnapshot: itemData.menuItemSnapshot,
      quantity: itemData.quantity,
      unitPrice: itemData.unitPrice,
      specialInstructions: itemData.specialInstructions || undefined
    };
    
    mockOrderItems.push(newItem);
    return newItem;
  }

  async getItemsByOrderId(orderId: number): Promise<OrderItem[]> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockOrderItems.filter(item => item.orderId === orderId);
  }

  async removeItemFromOrder(orderId: number, itemId: number): Promise<boolean> {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 50));
    
    const initialLength = mockOrderItems.length;
    mockOrderItems = mockOrderItems.filter(item => !(item.orderId === orderId && item.id === itemId));
    
    return mockOrderItems.length < initialLength;
  }
}