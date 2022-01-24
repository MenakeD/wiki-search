import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import ThemeToggle from '../components/common/ThemeToggle'
import Logo from '../public/brand/wiki-logo.png'
import Image from 'next/image'

const Home = () => {
  return (
    <Layout title='Wiki Search'>
      <Container>
        <section className='py-8'>
          <div className='flex justify-end'>
            <ThemeToggle />
          </div>
          <div className='flex flex-col items-center my-16'>
            <Image src={Logo} width={190} height={190} alt='Wiki Logo' />
            <h1 className='font-hoelfer text-5xl py-8 dark:text-white-base text-black '>
              Wiki Search
            </h1>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default Home
