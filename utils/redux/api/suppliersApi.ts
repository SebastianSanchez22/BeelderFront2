import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Set up an API for suppliers
export const suppliersApi = createApi({
  reducerPath: 'suppliersSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // Base URL for API requests
  }),
  tagTypes: ['Supplier'],
  endpoints: (builder) => ({
    createSupplier: builder.mutation({
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
  }),
});

export const { useCreateSupplierMutation } = suppliersApi;