'use client'

import Skeleton from '@/app/components/Skeleton'
import useSingleGifs from '@/app/hooks/useSingleGif'

export default function Gif({ params }) {
  const { gif, isLoading } = useSingleGifs({ id: params.id })

  async function copyClipboard() {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch (err) {
      console.error(err)
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
            <button
              className='px-8 py-2 bg-primary-white text-primary-black font-medium text-sm rounded-lg cursor-pointer lg:px-12 lg:text-lg 2xl:px-16 2xl:py-4 2xl:text-2xl 2xl:rounded-xl'
              onClick={copyClipboard}
            >
              Copy URL
            </button>
          </aside>
        </>
      )}
    </main>
  )
}
