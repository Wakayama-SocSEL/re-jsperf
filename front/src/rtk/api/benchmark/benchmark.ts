import { baseApi } from '@/rtk/api/baseApi'

export type BenchmarkType = {
  id: number
  title: string
  description: string
  body: string
}

const benchmarkApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBenchmarks: builder.query<BenchmarkType, number>({
      query: (id) => ({
        url: `/benchmarks/${id}`
      })
    })
  }),
  overrideExisting: false
})

export const { useGetBenchmarksQuery } = benchmarkApi
