import { configureStore } from '@reduxjs/toolkit';
import maquinasReducer from './sliceMaquinas';

const store = configureStore({
  reducer: {
    maquinas: maquinasReducer,
    // Otros reducers si los tienes
  },
});

export default store;