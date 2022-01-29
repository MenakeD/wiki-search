import { useEffect, useState } from 'react'
import Button from '../common/Button'
import ResultCard from '../common/ResultCard'
import { RiLoader5Line } from 'react-icons/ri'

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
        console.log('r: ', results.query.search)
        setResults(results.query.search)
        setLoading(false)
      }
    }
    console.log('s: ', search)
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
        <div className='flex justify-center w-full my-52 '>
          <RiLoader5Line className='text-7xl animate-spin dark:text-dark-text-result-heading text-black' />
        </div>
      ) : (
        <div className='w-2/3 mx-auto my-12 grid grid-cols-1 gap-7'>
          <div className='flex justify-start'>
            <p className='text-sm dark:text-dark-text-result-date text-light-text-result-date'>
              {totalHits} results found
            </p>
          </div>
          {dispalyedResults &&
            dispalyedResults.map((result) => (
              <ResultCard key={result.pageid} result={result} />
            ))}
          {sliceNo !== resultLimit && (
            <div className='flex justify-center w-full my-8'>
              <Button
                type='button'
                width='w-1/2 text-white-base'
                onClick={() => {
                  if (sliceNo < resultLimit) {
                    setSliceNo(sliceNo + 10)
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
