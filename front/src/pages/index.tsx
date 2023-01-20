import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { SearchForm } from '@/components/SearchForm'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <SearchForm />
      </Container>
    </>
  )
}
