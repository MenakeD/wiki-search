import Button from '../common/Button'
import ResultCard from '../common/ResultCard'

const SearchResults = ({ totalHits, results }) => {
  return (
    <div className='w-2/3 mx-auto my-12 grid grid-cols-1 gap-7'>
      <div className='flex justify-start'>
        <p className='text-sm dark:text-dark-text-result-date text-light-text-result-date'>
          {totalHits} results found
        </p>
      </div>
      {results &&
        results.map((result) => (
          <ResultCard key={result.pageid} result={result} />
        ))}
      <div className='flex justify-center w-full my-8'>
        <Button width='w-1/2 text-white-base'> More Results </Button>
      </div>
    </div>
  )
}

export default SearchResults
