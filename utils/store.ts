import { configureStore } from '@reduxjs/toolkit';
import { machinesSlice } from './machinesApi';

export const store = configureStore({
  reducer: {
    [machinesSlice.reducerPath]: machinesSlice.reducer, // Add the machinesSlice reducer
  },
  middleware: // Add the machinesSlice middleware
  (getDefaultMiddleware) => getDefaultMiddleware().concat(machinesSlice.middleware),
});