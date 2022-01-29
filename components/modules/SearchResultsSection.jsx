import Logo from '../../public/brand/wiki-logo.png'
import Image from 'next/image'
import InputTag from '../common/InputTag'
import Button from '../common/Button'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import SearchResults from './SearchResults'
import { BiSearch } from 'react-icons/bi'
import { animateScroll as scroll } from 'react-scroll'

const SearchResultsSection = ({ search, setSearch, setIsSearched }) => {
  const [loading, setLoading] = useState(true)
  const [sliceNo, setSliceNo] = useState(10)
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
    if (data.search !== search) {
      scroll.scrollToTop()
      setLoading(true)
      setSearch(data.search)
      setSliceNo(10)
    }
  }
  return (
    <section>
      <div className='sticky top-0 left-0  dark:bg-dark-background-primary bg-light-background-primary transition-all ease-out duration-500 '>
        <div className='md:flex md:justify-between  md:items-center  pt-8 pb-4'>
          <div
            className='flex space-x-6 items-center justify-center cursor-pointer pb-8 md:pb-0  '
            onClick={() => {
              setIsSearched(false)
            }}
          >
            <div className='hidden md:block'>
              <Image src={Logo} width={56} height={56} alt='wiki-logo' />
            </div>
            <h1 className='font-hoelfer text-2xl pt-4 md:pt-0 md:text-3xl dark:text-white-base text-black '>
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
              width='w-full md:w-96 '
              errors={errors}
            />
            <Button type='submit' width=''>
              <BiSearch className='text-lg text-white-base block md:hidden' />
              <p className='text-white-base hidden md:block'>Search</p>
            </Button>
          </form>
        </div>
      </div>

      <div>
        <SearchResults
          search={search}
          loading={loading}
          setLoading={setLoading}
          sliceNo={sliceNo}
          setSliceNo={setSliceNo}
        />
      </div>
    </section>
  )
}

export default SearchResultsSection
