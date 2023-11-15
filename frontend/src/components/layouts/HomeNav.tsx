import Link from 'next/link'
import Image from 'next/image'
import { LoginDialog } from '../logins/Login'
import { SignUpDialog } from '../logins/Signup'
import { ThemeToggle } from '../buttons/ThemeToogle'

export default function HomeNav() {
  return (
    <nav className='sticky z-50 h-16 top-0 backdrop:blur-lg flex bg-white shadow-sm flex-row items-center justify-between p-2 px-4 lg:px-8 dark:bg-gray-800'>
      <Image
        draggable={false}
        src='/leaf_logo.svg'
        alt='Leaf Logo'
        className='dark:invert'
        width={33}
        height={33}
        priority
      />

      <ul className='hidden md:flex space-x-4 text-sm'>
      <li className='cursor-pointer'>Explore</li>
        <Link
          href='/shop'
          className='cursor-pointer'
        >
          Shop
        </Link>
        <li className='cursor-pointer'>Forecasts</li>
 <li className='cursor-pointer'>Diseases</li>

      </ul>

      <ul className='flex space-x-2 text-sm'>
        <LoginDialog />
        <SignUpDialog />
        <ThemeToggle/>
      </ul>
    </nav>
  )
}
