import { configureStore } from '@reduxjs/toolkit';
import machinesReducer from './machinesSlice';

const store = configureStore({
  reducer: {
    machines: machinesReducer
  },
});

export default store;