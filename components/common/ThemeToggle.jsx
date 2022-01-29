import { BsFillCircleFill, BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setisMounted] = useState(false)

  useEffect(() => {
    setisMounted(true)
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkThemeMq.matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [setTheme])

  return (
    <>
      {isMounted && (
        <div className='flex  dark:bg-dark-background-secondary  bg-light-background-secondary px-4 py-3 space-x-5  rounded-full items-center shadow-sm dark:shadow-dark-shadow/10 shadow-light-shadow/25 '>
          {theme && theme === 'dark' ? (
            <>
              <BsFillCircleFill
                className='text-2xl dark:text-white-base shadow-sm  cursor-pointer '
                onClick={() => {
                  setTheme('light')
                }}
              />
              <FaMoon className='text-xl dark:text-white-dark shadow-sm ' />
            </>
          ) : (
            <>
              <BsSunFill className='text-xl text-black shadow-sm ' />
              <BsFillCircleFill
                className='text-2xl text-black shadow-sm  cursor-pointer '
                onClick={() => {
                  setTheme('dark')
                }}
              />
            </>
          )}
        </div>
      )}
    </>
  )
}

export default ThemeToggle
