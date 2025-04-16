import { makeAutoObservable } from 'mobx';

import { Order } from '~/service/orders/types';
import { OrdersService } from '~/service/orders/ordersService';

export class OrdersStore {
  public orders: Order[] = [];
  public isLoading: boolean = false;
  public error: string | null = null;

  constructor(private readonly service: OrdersService) {
    makeAutoObservable(this);
  }

  public fetchOrders = async (searchTerm: string = ''): Promise<void> => {
    this.isLoading = true;
    this.error = null;
    try {
      const fetchedOrders = await this.service.getOrders();
      this.orders =
        searchTerm.trim().length >= 2
          ? fetchedOrders.filter((order) =>
              order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : fetchedOrders;
    } catch (e) {
      this.error = e as string;
    } finally {
      this.isLoading = false;
    }
  };
}
