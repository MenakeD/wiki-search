import Head from 'next/head'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className='min-h-screen dark:bg-dark-background-primary bg-light-background-primary  font-roboto transition-all ease-out duration-500 selection:select-none cursor-default'>
        {children}
      </main>
    </>
  )
}

export default Layout
