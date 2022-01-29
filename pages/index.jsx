import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import ThemeToggle from '../components/common/ThemeToggle'
import HeroSection from '../components/modules/HeroSection'
import { useState } from 'react'
import SearchResultsSection from '../components/modules/SearchResultsSection'

const Home = () => {
  const [isSearched, setIsSearched] = useState(false)
  const [search, setSearch] = useState('')

  return (
    <Layout title='Wiki Search'>
      <Container>
        <section className='py-8 min-h-screen flex flex-col'>
          <div className='flex justify-end'>
            <ThemeToggle />
          </div>
          {!isSearched ? (
            <div className=' flex-grow flex flex-col justify-center'>
              <HeroSection setShow={setIsSearched} setSearch={setSearch} />
            </div>
          ) : (
            <SearchResultsSection
              search={search}
              setSearch={setSearch}
              setIsSearched={setIsSearched}
            />
          )}
        </section>
      </Container>
    </Layout>
  )
}

export default Home
