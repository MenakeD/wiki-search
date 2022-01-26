const Button = ({ children, type = 'button' }) => {
  return (
    <button
      type={type}
      className='dark:bg-dark-button-primary bg-light-button-primary px-8 py-2 rounded-xl transition-colors ease-out duration-300  shadow-md dark:shadow-dark-shadow/10'
    >
      {children}
    </button>
  )
}

export default Button
