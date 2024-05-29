'use client'

import Link from 'next/link'
import useAuth from '../hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.refresh()
  }

  return (
    <header className='w-full flex items-center justify-center fixed z-50'>
      <nav className='px-8 py-4 w-full border-b border-neutral-800 bg-primary-black/75 backdrop-blur-md flex items-center gap-6 xl:px-16 xl:py-6 xl:gap-10 2xl:px-24 2xl:py-10 2xl:gap-12'>
        <Link
          className='mr-auto text-white font-bold xl:text-2xl 2xl:text-4xl'
          href='/'
        >
          <img
            className='w-12 invert xl:w-20 2xl:w-32'
            src='/gifree.png'
            alt='header logo'
          />
        </Link>
        <Link
          className='text-neutral-400 font-bold text-xs xl:text-xl 2xl:text-3xl'
          href='/favorites'
        >
          Favoritos
        </Link>
        {user?.user ? (
          ''
        ) : (
          <Link
            className='text-neutral-400 font-bold text-xs xl:text-xl 2xl:text-3xl'
            href='/login'
          >
            Accede
          </Link>
        )}
        {user?.user ? (
          <button
            onClick={handleLogout}
            className='text-neutral-400 font-bold text-xs xl:text-xl 2xl:text-3xl'
          >
            Cerrar sesion
          </button>
        ) : (
          ''
        )}
      </nav>
    </header>
  )
}
