"use client"

import { Provider as ReduxProvider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { machinesSlice } from './machinesApi'; // RTK Query API slice
import { store } from './store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}> {/* Redux store */}
      <ApiProvider api={machinesSlice}>  {/* RTK Query API slice */}
        {children}
      </ApiProvider>
    </ReduxProvider>
  );
}