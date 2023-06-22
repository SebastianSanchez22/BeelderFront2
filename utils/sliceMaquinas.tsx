import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Maquina {
  machineId: string;
  name: string;
  category: string;
  totalQuantity: number;
  supplierId: string;
}

export const crearMaquina = createAsyncThunk(
  'maquinas/crearMaquina',
  async (machineData: Maquina) => {
    const response = await fetch('http://localhost:3000/machines', {
      method: 'POST',
      body: JSON.stringify(machineData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
);

const sliceMaquinas = createSlice({
  name: 'maquinas',
  initialState: [] as Maquina[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(crearMaquina.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default sliceMaquinas.reducer;