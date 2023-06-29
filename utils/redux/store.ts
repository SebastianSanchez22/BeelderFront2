import { configureStore } from '@reduxjs/toolkit';
import { machinesApi } from './api/machinesApi';
import { suppliersApi } from './api/suppliersApi';
import { clientsApi } from './api/clientsApi';

export const store = configureStore({
  reducer: {
    [machinesApi.reducerPath]: machinesApi.reducer,
    [suppliersApi.reducerPath]: suppliersApi.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(machinesApi.middleware, suppliersApi.middleware, clientsApi.middleware)
});