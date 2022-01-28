const Button = ({
  children,
  type = 'button',
  width = 'w-full',
  padding = 'px-8 py-2 ',
}) => {
  return (
    <button
      type={type}
      className={`dark:bg-dark-button-primary bg-light-button-primary rounded-xl ${padding} ${width} transition-colors ease-out duration-300  shadow-md dark:shadow-dark-shadow/10`}
    >
      {children}
    </button>
  )
}

export default Button
