export type OrderStatus = 'PAID' | 'UNPAID';

export interface Order {
  orderNumber: string;
  dueDate: string;
  createdAt: string;
  total: number;
  status: OrderStatus;
}

export type Orders = Order[];
