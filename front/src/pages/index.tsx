import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { SearchForm } from '@/components/SearchForm'
import { List } from '@/components/List'
import { useGetSearchListQuery } from '@/rtk/api'

export default function Home() {
  const { data, isLoading } = useGetSearchListQuery()

  return (
    <>
      <Header />
      <Container>
        <SearchForm />
        {!data || isLoading ? <>{'loading...'}</> : <List data={data} />}
      </Container>
    </>
  )
}
