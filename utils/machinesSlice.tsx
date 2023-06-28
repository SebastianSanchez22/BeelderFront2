import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Machine } from './interfaces';

export const initialState: Machine[] = [];

const machinesSlice = createSlice({
  name: 'Machines',
  initialState,
  reducers: {
  }});

export default machinesSlice.reducer;