import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Machine } from '@/utils/interfaces';

// Set up an API  for machines
export const machinesApi = createApi({
  reducerPath: 'machinesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // Base URL for API requests
  }),
  tagTypes: ['Machine'],
  endpoints: (builder) => ({
    createMachine: builder.mutation<Machine, Partial<Machine>>({
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
    getMachines: builder.query<Machine[], void>({
      query: () => '/machine',
      providesTags: ['Machine'],
    }),
  }),
});

export const { useCreateMachineMutation, useGetMachinesQuery } = machinesApi;