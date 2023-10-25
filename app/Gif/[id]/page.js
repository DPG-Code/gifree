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
    <main className='min-h-screen flex items-center justify-center p-24 gap-12'>
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <>
          <img
            className='rounded-xl'
            width='480'
            height='480'
            src={gif?.url}
            alt={gif?.title}
          />
          <div className='flex flex-col items-center justify-center gap-4'>
            <h3 className='text-white font-semibold text-lg'>{gif?.title}</h3>
            <input
              className='px-6 py-1.5 bg-white/10 text-white font-medium text-sm outline-none rounded-full'
              type='text'
              defaultValue={gif?.url}
            />
            <p className='text-white font-semibold text-lg'>ID: {gif?.id}</p>
            <button
              className='px-6 py-1.5 bg-[#ee4a41] text-white font-medium text-sm rounded-full cursor-pointer'
              onClick={copyClipboard}
            >
              Copy URL
            </button>
          </div>
        </>
      )}
    </main>
  )
}
