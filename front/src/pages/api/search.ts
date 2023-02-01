import type { NextApiRequest, NextApiResponse } from 'next'
import type { SearchType } from '@/rtk/api'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchType[]>
) {
  res.status(200).json([
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
  ])
}
