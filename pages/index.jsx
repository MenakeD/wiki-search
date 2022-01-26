import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import ThemeToggle from '../components/common/ThemeToggle'
import HeroSection from '../components/modules/HeroSection'
import { useState } from 'react'

const Home = () => {
  const [isSearched, setIsSearched] = useState(false)
  return (
    <Layout title='Wiki Search'>
      <Container>
        <section className='py-8'>
          <div className='flex justify-end'>
            <ThemeToggle />
          </div>
          {!isSearched ? <HeroSection setShow={setIsSearched} /> : <div></div>}
        </section>
      </Container>
    </Layout>
  )
}

export default Home
