import { useEffect, useState } from 'react'
import Button from '../common/Button'
import ResultCard from '../common/ResultCard'
import { RiLoader5Line } from 'react-icons/ri'
import { animateScroll as scroll } from 'react-scroll'

const SearchResults = ({
  search,
  loading,
  setLoading,
  setSliceNo,
  sliceNo,
}) => {
  const [totalHits, setTotalHits] = useState(0)
  const [results, setResults] = useState()
  const [dispalyedResults, setDispalyedResults] = useState()
  const resultLimit = 50

  useEffect(() => {
    const getResults = async () => {
      const request =
        'https://en.wikipedia.org/w/api.php' +
        `?origin=*&action=query&list=search&srsearch=${search}&format=json&srlimit=${resultLimit}`

      const response = await fetch(request)
      if (response.ok) {
        const results = await response.json()
        setTotalHits(results.query.searchinfo.totalhits)
        setResults(results.query.search)
        setLoading(false)
      }
    }
    getResults()
  }, [search, setLoading])

  useEffect(() => {
    if (results) {
      var sliced_results = results.slice(0, sliceNo)
      setDispalyedResults(sliced_results)
    }
  }, [results, sliceNo])

  return (
    <section className=''>
      {loading ? (
        <div className='flex  justify-center w-full py-36 md:py-52'>
          <RiLoader5Line className='text-7xl animate-spin dark:text-dark-text-result-heading text-black' />
        </div>
      ) : (
        <div className='w-3/4 md:w-2/3 mx-auto mt-8 md:mt-12 pb-4  grid grid-cols-1 gap-5 sm:gap-6 md:gap-7'>
          <div className='flex justify-start'>
            <p className='text-xs sm:text-sm dark:text-dark-text-result-date text-light-text-result-date'>
              {totalHits} results found
            </p>
          </div>
          {dispalyedResults &&
            dispalyedResults.map((result) => (
              <ResultCard key={result.pageid} result={result} />
            ))}
          {sliceNo !== resultLimit && results && results.length > 10 && (
            <div className='flex justify-center w-full mt-8 mb-2'>
              <Button
                type='button'
                width='w-full md:w-1/2 text-white-base'
                onClick={() => {
                  if (sliceNo < resultLimit) {
                    setSliceNo(sliceNo + 10)
                    scroll.scrollMore(400)
                  }
                }}
              >
                More Results
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default SearchResults
