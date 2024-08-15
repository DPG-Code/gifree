'use client'

import Link from 'next/link'
import useSingleGifs from '@/app/hooks/useSingleGif'
import Skeleton from '@/app/components/Skeleton'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

// Detail page of a single gif.
export default function Gif({ params }) {
  const { gif, isLoading } = useSingleGifs({ id: params.id })
  const { toast } = useToast()

  // Function copy url to clipboard.
  async function copyClipboard() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast({
        description: 'Url copiada al portapapeles.'
      })
    } catch (err) {
      console.error(err)
      toast({
        variant: 'destructive',
        title: '¡Oh no! Algo salió mal.',
        description: 'Hay un problema al copiar la url.'
      })
    }
  }

  return (
    <main className='home-container w-ful px-10 py-32 min-h-screen flex flex-col items-center justify-center gap-12 relative lg:flex-row lg:gap-20 2xl:px-20 2xl:py-52 2xl:gap-36'>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <img
            className='w-full rounded-xl lg:max-w-[480px] 2xl:max-w-[620px]'
            width='480'
            height='480'
            src={gif?.url}
            alt={gif?.title}
          />
          <aside className='flex flex-col items-center justify-center gap-3 lg:gap-4 2xl:gap-6'>
            <h3 className='max-w-[320px] text-center text-white font-semibold text-lg lg:text-2xl 2xl:max-w-[620px] 2xl:text-5xl'>
              {gif?.title}
            </h3>
            <input
              className='px-6 py-1.5 border border-neutral-700 bg-primary-black backdrop-blur-md text-primary-white font-normal text-sm outline-none rounded-lg 2xl:px-10 2xl:py-2 2xl:text-xl 2xl:rounded-xl'
              type='text'
              defaultValue={gif?.url}
            />
            <p className='text-center text-neutral-300 font-medium text-base 2xl:text-xl'>
              ID: {gif?.id}
            </p>
            <div className='flex gap-2 xl:gap-4'>
              <Button onClick={copyClipboard}>Copy URL</Button>
              <Link href={gif?.url} target='_blank'>
                <Button variant='secondary'>Original Gif</Button>
              </Link>
            </div>
          </aside>
        </>
      )}
    </main>
  )
}
