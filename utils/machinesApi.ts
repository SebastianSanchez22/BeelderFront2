import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const machinesSlice = createApi({
  reducerPath: 'machinesSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
  }),
  tagTypes: ['Machine'],
  endpoints: (builder) => ({
    createMachine: builder.mutation({
      query: (payload) => ({
        url: '/machine',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Machine'],
    }),
  }),
})
export const { useCreateMachineMutation } = machinesSlice