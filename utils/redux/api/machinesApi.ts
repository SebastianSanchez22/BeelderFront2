import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Set up an API  for machines
export const machinesApi = createApi({
  reducerPath: 'machinesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // Base URL for API requests
  }),
  tagTypes: ['Machine'],
  endpoints: (builder) => ({
    createMachine: builder.mutation({
      query: (payload) => ({
        url: '/machine', // URL for the create machine request
        method: 'POST', // HTTP method
        body: payload, // Request payload (data)
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Machine'],
    }),
  }),
});

export const { useCreateMachineMutation } = machinesApi;