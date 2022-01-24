import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import ThemeToggle from '../components/common/ThemeToggle'
const Home = () => {
  return (
    <Layout title='Wiki Search'>
      <Container>
        <section className='py-8'>
          <div className='flex justify-end'>
            <ThemeToggle />
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default Home
