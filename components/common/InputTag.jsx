const InputTag = ({
  type = 'text',
  placeholder = '',
  register = () => {},
  name,
  validation,
  errors = [],
  width = 'w-96',
}) => {
  return (
    <div className={`${width}`}>
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
