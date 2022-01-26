const InputTag = ({
  type = 'text',
  placeholder = '',
  register = () => {},
  name,
  validation,
  errors = [],
}) => {
  return (
    <div className='w-96'>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className='px-6 py-3 dark:bg-white-dark bg-white-base shadow-md dark:shadow-dark-shadow/20 rounded-2xl w-full focus:outline-none text-gray-700 '
      />
      {console.log(errors)}
    </div>
  )
}

export default InputTag
