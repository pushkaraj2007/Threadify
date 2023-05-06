import { NextPage } from 'next'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'
import Link from 'next/link'
import ProfileDropdown from './ProfileDropdown'
import { useSession, signIn } from 'next-auth/react'

const Navbar: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const { data: session } = useSession()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header className='text-gray-600 bg-gray-100 body-font dark:bg-gray-900'>
      <div className='container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row'>
        <div className='topNavbar flex flex-row items-center'>
          <div className='flex flex-row items-center'>
            <Link className='cursor-pointer' href='/'>
              <a>
                <div className='flex items-center font-medium text-gray-900 title-font dark:text-gray-300 logoDiv'>
                  <Image
                    width={40}
                    height={40}
                    src='/logo.svg'
                    className='h-12 filter dark:invert'
                    alt=''
                  />
                  <span className='ml-3 text-xl'>Threadify</span>
                </div>
              </a>
            </Link>
          </div>
          <div className='md:flex-start lg:mr-auto lg:ml-5 contributors   '>
            <Link href='/contributors'>
              <a className=' hover:underline text-gray-600 dark:text-gray-200 text-lg  '>
                Contributors
              </a>
            </Link>
          </div>
        </div>

        <div className='flex signUpDiv'>
          <button className='mr-7' onClick={toggleTheme}>
            {' '}
            {theme === 'light' ? (
              <FaMoon className='text-xl text-gray-900' />
            ) : (
              <FaSun className='text-xl text-gray-300' />
            )}
          </button>

          {session ? (
            <ProfileDropdown />
          ) : (
            <Link href='/early-access'>
              <a>
                <button className='flex items-center px-4 py-2 font-bold text-white transition-all bg-blue-500 rounded hover:bg-blue-700 signUpButton'>
                  Sign up for early access
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    strokeWidth='2'
                    className='w-4 h-4 ml-1'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </button>
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
