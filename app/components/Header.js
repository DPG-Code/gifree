import Link from 'next/link'
import Heart from './icons/Heart'

export default function Header() {
  return (
    <header className='w-full flex items-center justify-center fixed top-6 z-50 2xl:top-10'>
      <nav className='px-8 py-3 w-10/12 bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-between rounded-full 2xl:px-16 2xl:py-6'>
        <Link className='text-white font-semibold 2xl:text-3xl' href='/'>
          Gifree
        </Link>
        <Link className='text-white font-medium' href='/'>
          <Heart className='w-6 h-6 2xl:w-10 2xl:h-10' />
        </Link>
      </nav>
    </header>
  )
}
