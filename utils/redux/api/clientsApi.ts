import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Set up an API for clients
export const clientsApi = createApi({
  reducerPath: 'clientsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // Base URL for API requests
  }),
  tagTypes: ['Client'],
  endpoints: (builder) => ({
    createClient: builder.mutation({
      query: (payload) => ({
        url: '/clients', // URL for the create client request
        method: 'POST', // HTTP method
        body: payload, // Request payload (data)
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Client'],
    }),
  }),
});

export const { useCreateClientMutation } = clientsApi;