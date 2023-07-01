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
        url: '/suppliers', // URL for the create supplier request
        method: 'POST', // HTTP method
        body: payload, // Request payload (data)
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
  }),
});

export const { useCreateSupplierMutation, useGetSuppliersQuery } = suppliersApi;