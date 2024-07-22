'use client'

import Link from 'next/link'
import useAuth from '../hooks/useAuth'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Header() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  return (
    <header className='w-full flex items-center justify-center fixed z-50'>
      <nav className='px-8 py-4 w-full border-b border-neutral-800 bg-primary-black/75 backdrop-blur-md flex items-center gap-2 xl:px-16 xl:py-6 xl:gap-6 2xl:px-24 2xl:py-10 2xl:gap-12'>
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
        <Link href='/favorites'>
          <Button variant='link'>Favoritos</Button>
        </Link>
        {user?.user ? (
          ''
        ) : (
          <Link href='/login'>
            <Button variant='secondary'>Accede</Button>
          </Link>
        )}
        {user?.user ? (
          <Button onClick={handleLogout} variant='secondary'>
            Cerrar sesion
          </Button>
        ) : (
          ''
        )}
      </nav>
    </header>
  )
}
