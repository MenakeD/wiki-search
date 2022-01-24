import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import { useTheme } from 'next-themes'
const Home = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Layout title='Wiki Search'>
      <Container>
        <h1
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
          className='dark:text-white-base text-black cursor-pointer '
        >
          Home page
        </h1>
      </Container>
    </Layout>
  )
}

export default Home
