import Logo from '../../public/brand/wiki-logo.png'
import Image from 'next/image'
import InputTag from '../common/InputTag'
import Button from '../common/Button'
import { useForm } from 'react-hook-form'
import { BiSearch } from 'react-icons/bi'

const HeroSection = ({ setShow, setSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    if (data.search) {
      setSearch(data.search)
      setShow(true)
    }
  }

  return (
    <div className='flex flex-col items-center '>
      <Image src={Logo} width={180} height={180} alt='Wiki Logo' />
      <h1 className='font-hoelfer text-4xl sm:text-5xl py-8 dark:text-white-base text-black '>
        Wiki Search
      </h1>
      <form
        className='py-8 md:flex md:space-x-4 w-full md:w-fit'
        onSubmit={handleSubmit(onSubmit)}
        autoComplete='off'
      >
        <InputTag
          placeholder='Search here'
          register={register}
          name='search'
          type='text'
          width='md:w-96 w-full'
          errors={errors}
        />
        <div className='my-6 md:my-0 flex justify-center'>
          <Button type='submit' width=''>
            <div className='flex items-center space-x-2'>
              <BiSearch className='text-lg' />
              <p className='text-white-base'>Search</p>
            </div>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default HeroSection
