import Link from 'next/link'

export default function Header() {
  return (
    <nav className='w-full flex items-center justify-between fixed top-0'>
      <Link href={`/`}>Gifree</Link>
      <span className='ml-auto'>login</span>
    </nav>
  )
}
