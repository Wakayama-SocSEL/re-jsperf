import { useRouter } from 'next/router'

const Benchmark = () => {
  const router = useRouter()
  const { id } = router.query

  return <div>{id}</div>
}

export default Benchmark
