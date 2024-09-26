import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className='w-full min-h-screen flex flex-col items-center justify-center gap-6 xl:gap-8 2xl:gap-10'>
      <header className='w-full flex flex-col items-center justify-center gap-2 2xl:gap-3'>
        <h2 className='text-center text-white font-semibold text-3xl xl:text-3xl 2xl:text-5xl'>
          404
        </h2>
        <p className='text-center text-neutral-300 font-medium text-lg xl:text-xl 2xl:text-2xl'>
          Page not found!
        </p>
      </header>
      <Button>
        <Link href='/'>Return Home</Link>
      </Button>
    </main>
  )
}
