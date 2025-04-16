import React from 'react';

import AppStore from '~/store/index';

export interface StoreContextInterface {
  appStore: AppStore;
}

export const appStore = new AppStore();

export const StoreContext = React.createContext<StoreContextInterface>({
  appStore,
});
