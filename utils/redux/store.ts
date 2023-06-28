import { configureStore } from '@reduxjs/toolkit';
import { machinesApi } from './api/machinesApi';
import { suppliersApi } from './api/suppliersApi';

export const store = configureStore({
  reducer: {
    [machinesApi.reducerPath]: machinesApi.reducer,
    [suppliersApi.reducerPath]: suppliersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(machinesApi.middleware, suppliersApi.middleware)
});