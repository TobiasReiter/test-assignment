import { makeAutoObservable } from 'mobx';

import { OrdersStore } from '~/store/orders/ordersStore.ts';
import { OrdersService } from '~/service/orders/ordersService';

export default class AppStore {
  public ordersStore: OrdersStore;

  constructor() {
    makeAutoObservable(this);

    this.ordersStore = new OrdersStore(new OrdersService());
  }
}
