import Logo from '../../public/brand/wiki-logo.png'
import Image from 'next/image'
import InputTag from '../common/InputTag'
import Button from '../common/Button'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import SearchResults from './SearchResults'

const SearchResultsSection = ({ search }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    reset({ search: search })
  }, [reset, search])

  const onSubmit = (data) => {
    console.log(data)
    setShow(true)
  }
  return (
    <section>
      <div className='flex justify-between my-8 items-center'>
        <div className='flex space-x-6 items-center   '>
          <Image src={Logo} width={56} height={56} alt='wiki-logo' />
          <h1 className='font-hoelfer text-3xl dark:text-white-base text-black '>
            Wiki Search
          </h1>
        </div>
        <form
          className=' flex space-x-4'
          onSubmit={handleSubmit(onSubmit)}
          autoComplete='off'
        >
          <InputTag
            placeholder='Search here'
            register={register}
            name='search'
            type='text'
            errors={errors}
          />
          <Button type='submit' width=''>
            <p className='text-white-base'>Search</p>
          </Button>
        </form>
      </div>
      <div>
        <SearchResults />
      </div>
    </section>
  )
}

export default SearchResultsSection
