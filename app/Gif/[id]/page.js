'use client'

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
    <main className='home-container px-10 py-32 min-h-screen flex flex-col items-center justify-center gap-12 relative lg:flex-row lg:gap-20 2xl:px-20 2xl:py-52 2xl:gap-36'>
      {isLoading ? (
        <span>loading...</span>
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
              className='px-6 py-1.5 bg-white/10 text-neutral-300 font-medium text-sm outline-none rounded-full 2xl:px-10 2xl:py-2 2xl:text-xl'
              type='text'
              defaultValue={gif?.url}
            />
            <p className='text-center text-neutral-300 font-medium text-base 2xl:text-xl'>
              ID: {gif?.id}
            </p>
            <button
              className='px-8 py-2 bg-[#ee4a41] shadow-[0px_0px_16px_rgb(238,74,65,0.4)] text-white font-medium text-sm rounded-full cursor-pointer lg:px-12 lg:text-lg 2xl:px-16 2xl:py-4 2xl:text-2xl'
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
