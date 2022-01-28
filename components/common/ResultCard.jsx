const ResultCard = () => {
  return (
    <div>
      <h2 className='dark:text-dark-text-result-heading text-light-text-result-heading text-2xl font-medium py-0.5 hover:underline cursor-pointer'>
        Car
      </h2>
      <h3 className='dark:text-dark-text-result-link text-light-text-result-link text-lg py-0.5'>
        https://en.wikipedia.org/wiki/Car
      </h3>
      <h4 className='dark:text-dark-text-result-description text-light-text-result-description text-lg py-1'>
        A car (or automobile) is a wheeled motor vehicle used for
        transportation. Most definitions of cars say that they run primarily on
        roads, seat one to eight
      </h4>
      <h4 className='dark:text-dark-text-result-date text-light-text-result-date text-base py-0.5'>
        25th January 2021
      </h4>
    </div>
  )
}

export default ResultCard
