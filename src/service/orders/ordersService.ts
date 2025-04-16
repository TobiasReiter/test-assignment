import ordersData from '@/mockData/orders.json';
import { Orders } from '~/service/orders/types.ts';

export class OrdersService {
  public async getOrders(): Promise<Orders> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ordersData as Orders);
      }, 1000);
    });
  }
}
