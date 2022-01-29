import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)

const ResultCard = ({ result }) => {
  const [page, setPage] = useState('')

  useEffect(() => {
    const getUrl = async () => {
      console.log('result:', result)
      const request =
        'https://en.wikipedia.org/w/api.php' +
        `?origin=*&action=query&prop=info&pageids=${result.pageid}&inprop=url&format=json`
      const response = await fetch(request)

      if (response.ok) {
        const urlResult = await response.json()
        const pageId = result.pageid

        setPage(urlResult.query.pages[pageId])
      }
    }

    getUrl()
  }, [result])

  return (
    <div>
      <h2 className='dark:text-dark-text-result-heading text-light-text-result-heading text-2xl font-medium py-0.5 hover:underline cursor-pointer flex'>
        <a target='_blank' rel='noreferrer' href={page.fullurl}>
          {result.title}
        </a>
      </h2>
      <div className='py-0.5'>
        <h3 className='dark:text-dark-text-result-link text-light-text-result-link text-lg'>
          <a target='_blank' rel='noreferrer' href={page.fullurl}>
            {page.fullurl}
          </a>
        </h3>
      </div>

      <div
        className='dark:text-dark-text-result-description text-light-text-result-description text-lg py-1 searchmatch'
        dangerouslySetInnerHTML={{ __html: result.snippet }}
      ></div>
      <h4 className='dark:text-dark-text-result-date text-light-text-result-date text-base py-0.5'>
        {dayjs(result.timestamp).format('Do MMMM YYYY')}
      </h4>
    </div>
  )
}

export default ResultCard
