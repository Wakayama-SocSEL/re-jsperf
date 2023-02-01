import { ResponseResolver, MockedRequest, restContext } from 'msw'
import { SearchType } from '@/rtk/api'

export const mockSearch: ResponseResolver<MockedRequest, typeof restContext> = (
  _req,
  res,
  ctx
) => {
  const mockSearchList: SearchType[] = [
    {
      id: 9748,
      title: 'Benchmark: For Loop vs While Loop vs indexOf',
      description:
        'For Loop vs While Loop vs indexOf (version: 0). Comparing performance of: For Loop for item towards beginning vs While Loop for item towards beginning vs ...'
    },
    {
      id: 7075,
      title: 'Benchmark: Array slice vs for loop',
      description:
        'Array slice vs for loop (version: 0). Comparing performance of: slice vs push. Created: 2 years ago by: Guest. Jump to the latest result'
    }
  ]

  return res(ctx.status(200), ctx.json(mockSearchList))
}
