export interface Order {
  id: number;
  userId: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'in_transit' | 'delivered' | 'cancelled';
  totalAmount: number;
  deliveryAddress: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: number;
  orderId: number;
  menuItemId: number;
  menuItemSnapshot: string; // JSON stringified representation of the menu item at the time of order
  quantity: number;
  unitPrice: number;
  specialInstructions?: string | undefined;
}