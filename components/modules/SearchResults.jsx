import ResultCard from '../common/ResultCard'

const SearchResults = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className='w-2/3 mx-auto my-12 grid grid-cols-1 gap-7'>
      {arr.map((i) => (
        <ResultCard key={i} />
      ))}
    </div>
  )
}

export default SearchResults
