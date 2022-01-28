import Logo from '../../public/brand/wiki-logo.png'
import Image from 'next/image'
import InputTag from '../common/InputTag'
import Button from '../common/Button'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import SearchResults from './SearchResults'

const SearchResultsSection = ({ search, setSearch }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [totalHits, setTotalHits] = useState(0)
  const [results, setResults] = useState()

  useEffect(() => {
    const getResults = async () => {
      const request =
        'https://en.wikipedia.org/w/api.php' +
        `?origin=*&action=query&list=search&srsearch=${search}&format=json&srlimit=10`

      const response = await fetch(request)
      if (response.ok) {
        const results = await response.json()
        setTotalHits(results.query.searchinfo.totalhits)
        console.log('r: ', results.query.search)
        setResults(results.query.search)
      }
    }

    console.log('s: ', search)
    getResults()
  }, [search])

  useEffect(() => {
    reset({ search: search })
  }, [reset, search])

  const onSubmit = (data) => {
    setSearch(data.search)
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
        <SearchResults totalHits={totalHits} results={results} />
      </div>
    </section>
  )
}

export default SearchResultsSection
