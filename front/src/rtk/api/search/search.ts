import { baseApi } from '@/rtk/api/baseApi'

export type SearchType = {
  id: number
  title: string
  description: string
}

const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSearchList: builder.query<SearchType[], void>({
      query: () => ({
        url: `/search`
      })
    })
  }),
  overrideExisting: false
})

export const { useGetSearchListQuery } = searchApi
