import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Set up an API slice for machines
export const machinesSlice = createApi({
  reducerPath: 'machinesSlice', // Name of the reducer slice
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // Base URL for API requests
  }),
  tagTypes: ['Machine'], // Define a tag type for machines
  endpoints: (builder) => ({
    // Create a machine mutation endpoint
    createMachine: builder.mutation({
      query: (payload) => ({
        url: '/machine', // URL for the create machine request
        method: 'POST', // HTTP method
        body: payload, // Request payload (data)
        headers: {
          'Content-type': 'application/json; charset=UTF-8', // Request headers
        },
      }),
      invalidatesTags: ['Machine'], // Invalidate the "Machine" tag after mutation
    }),
  }),
});

// Extract the useCreateMachineMutation hook from machinesSlice
export const { useCreateMachineMutation } = machinesSlice;