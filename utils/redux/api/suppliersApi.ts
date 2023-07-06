import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Supplier } from '@/utils/interfaces';

// Set up an API for suppliers
export const suppliersApi = createApi({
  reducerPath: 'suppliersSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // Base URL for API requests
  }),
  tagTypes: ['Supplier'],
  endpoints: (builder) => ({
    createSupplier: builder.mutation<Supplier, Partial<Supplier>>({
      query: (payload) => ({
        url: '/suppliers',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Supplier'],
    }),
    getSuppliers: builder.query<Supplier[], void>({
      query: () => '/suppliers',
      providesTags: ['Supplier'],
    }),
    getSupplierById: builder.query<Supplier, string>({
      query: (supplierId) => `/suppliers/${supplierId}`,
      providesTags: (result, error, supplierId) => [{ type: 'Supplier', id: supplierId }],
    }),
    updateSupplier: builder.mutation<Supplier, { supplierId: string; payload: Partial<Supplier> }>({
      query: ({ supplierId, payload }) => ({
        url: `/suppliers/${supplierId}`,
        method: 'PUT',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Supplier'],
    }),    
  }),
});

export const { useCreateSupplierMutation, useGetSuppliersQuery, useGetSupplierByIdQuery } = suppliersApi;