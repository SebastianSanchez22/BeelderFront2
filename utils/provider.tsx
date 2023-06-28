"use client"

import { Provider as ReduxProvider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { machinesSlice } from './machinesApi'; // Importa el api de RTK Query
import { store } from './store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      <ApiProvider api={machinesSlice}>
        {children}
      </ApiProvider>
    </ReduxProvider>
  );
}