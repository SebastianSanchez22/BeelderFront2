import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface Machine {
  machineId: string;
  name: string;
  category: string;
  totalQuantity: number;
  supplierId: string;
}

export const createMachine = createAsyncThunk(
  'machines/create',
  async (machineData: Machine) => {
    console.log("Llego antes del fetch")
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

const machinesSlice = createSlice({
  name: 'Machines',
  initialState: [] as Machine[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createMachine.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default machinesSlice.reducer;