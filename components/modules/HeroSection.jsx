import Logo from '../../public/brand/wiki-logo.png'
import Image from 'next/image'
import InputTag from '../common/InputTag'
import Button from '../common/Button'
import { useForm } from 'react-hook-form'

const HeroSection = ({ setShow }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    setShow(true)
  }

  return (
    <div className='flex flex-col items-center my-16'>
      <Image src={Logo} width={180} height={180} alt='Wiki Logo' />
      <h1 className='font-hoelfer text-5xl py-8 dark:text-white-base text-black '>
        Wiki Search
      </h1>
      <form className='py-8 flex space-x-4' onSubmit={handleSubmit(onSubmit)}>
        <InputTag
          placeholder='Search here'
          register={register}
          name='search'
          type='text'
          errors={errors}
        />
        <Button type='submit'>
          <p className='text-white-base'>Search</p>
        </Button>
      </form>
    </div>
  )
}

export default HeroSection
