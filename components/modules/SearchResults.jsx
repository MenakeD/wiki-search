import Button from '../common/Button'
import ResultCard from '../common/ResultCard'

const SearchResults = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className='w-2/3 mx-auto my-12 grid grid-cols-1 gap-7'>
      <div className='flex justify-start'>
        <p className='text-sm dark:text-dark-text-result-date text-light-text-result-date'>
          100 results found
        </p>
      </div>
      {arr.map((i) => (
        <ResultCard key={i} />
      ))}
      <div className='flex justify-center w-full my-8'>
        <Button width='w-1/2'> More Results </Button>
      </div>
    </div>
  )
}

export default SearchResults
