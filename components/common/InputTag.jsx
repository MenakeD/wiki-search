const InputTag = ({ type = 'text', placeholder = '' }) => {
  return (
    <div className='w-96'>
      <input
        type={type}
        placeholder={placeholder}
        className='px-6 py-3 dark:bg-white-dark bg-white-base shadow-md dark:shadow-dark-shadow/25 rounded-2xl w-full '
      />
    </div>
  )
}

export default InputTag
