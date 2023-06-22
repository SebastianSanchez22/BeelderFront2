import { configureStore } from '@reduxjs/toolkit';
import maquinasReducer from './sliceMaquinas';

const store = configureStore({
  reducer: {
    maquinas: maquinasReducer
  },
});

export default store;