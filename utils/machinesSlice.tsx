import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Machine {
  machineId: string;
  name: string;
  category: string;
  totalQuantity: number;
  supplierId: string;
}

export const initialState: Machine[] = [];

const machinesSlice = createSlice({
  name: 'Machines',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<{ field: keyof Machine; value: string | number }>) => {
      const { field, value } = action.payload;
      return state.map(machine => {
      if (field in machine) {
        return {
        ...machine,
        [field]: value,
      };
    }
    return machine;
  });
    },
    resetForm: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createMachine.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const createMachine = createAsyncThunk('machines/create', async (machineData: Machine) => {
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

export const { setField, resetForm } = machinesSlice.actions;

export default machinesSlice.reducer;