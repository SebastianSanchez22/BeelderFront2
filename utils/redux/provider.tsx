import { Provider as ReduxProvider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { machinesApi } from './api/machinesApi';
import { suppliersApi } from './api/suppliersApi';
import { store } from './store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}> {/* Redux store */}
      <ApiProvider api={machinesApi}>  {/* RTK Query machines API  */}
        <ApiProvider api={suppliersApi}> {/* RTK Query suppliers API  */}
          {children}
        </ApiProvider>
      </ApiProvider>
    </ReduxProvider>
  );
}