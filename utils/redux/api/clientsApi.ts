import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Client } from '@/utils/interfaces';

// Set up an API for clients
export const clientsApi = createApi({
  reducerPath: 'clientsSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000', // Base URL for API requests
  }),
  tagTypes: ['Client'],
  endpoints: (builder) => ({
    createClient: builder.mutation<Client, Partial<Client>>({
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
    getClients: builder.query<Client[], void>({
        query: () => '/clients',
        providesTags: ['Client'],
    }),
    getClientById: builder.query<Client, string>({
      query: (clientId) => `/clients/${clientId}`,
      providesTags: (result, error, clientId) => [{ type: 'Client', id: clientId }],
    }),
    updateClient: builder.mutation<Client, { clientId: string; payload: Partial<Client> }>({
        query: ({ clientId, payload }) => ({
          url: `/clients/${clientId}`,
          method: 'PUT',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['Client'],
    }),
  }),
});

export const { useCreateClientMutation, useGetClientsQuery, useGetClientByIdQuery,
   useUpdateClientMutation } = clientsApi;