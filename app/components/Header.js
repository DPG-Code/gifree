import Link from 'next/link'
import Heart from './icons/Heart'

export default function Header() {
  return (
    <header className='w-full flex items-center justify-center fixed top-6 z-50'>
      <nav className='px-8 py-3 w-10/12 bg-white/10 backdrop-blur-md flex items-center justify-between rounded-full'>
        <Link className='text-white font-semibold' href='/'>
          Gifree
        </Link>
        <Link className='text-white font-medium' href='/'>
          <Heart />
        </Link>
      </nav>
    </header>
  )
}
