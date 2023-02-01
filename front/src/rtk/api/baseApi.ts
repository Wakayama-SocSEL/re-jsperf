import { isDev } from '@/lib/nodeEnv'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: isDev
      ? 'http://localhost:3000/api/'
      : 'https://wakayama-socsel.github.io/re-jsperf/api/'
  }),
  endpoints: () => ({})
})
