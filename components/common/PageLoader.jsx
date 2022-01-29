import { RiLoader5Line } from 'react-icons/ri'
const PageLoader = () => {
  return (
    <div className='h-screen flex justify-center items-center animate-spin'>
      <RiLoader5Line className='text-7xl' />
    </div>
  )
}

export default PageLoader
