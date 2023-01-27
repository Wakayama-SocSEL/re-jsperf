import { useRouter } from 'next/router'

const data = [
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

const Benchmark = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div style={{ width: '100%', textAlign: 'center', fontSize: '100px' }}>
      {id}
    </div>
  )
}

export default Benchmark

export const getStaticPaths = async () => {
  // 事前ビルドしたいパスを指定
  const paths = data.map((item) => ({
    params: {
      id: item.id.toString()
    }
  }))

  return { paths, fallback: false }
}

type ParamType = {
  params: {
    id: string
  }
}

export const getStaticProps = async ({ params }: ParamType) => {
  const item = data.find((item) => item.id.toString() === params.id)

  return {
    props: {
      item
    }
  }
}
