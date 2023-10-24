'use client'

import Image from 'next/image'
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
    <main className='min-h-screen flex items-center justify-start p-24 gap-12'>
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <>
          <Image width='480' height='480' src={gif.url} alt={gif.title} />
          <div className='flex flex-col gap-2'>
            <h3>{gif.title}</h3>
            <input type='text' defaultValue={gif.url} />
            <p>ID: {gif.id}</p>
            <button onClick={copyClipboard}>Copy URL</button>
          </div>
        </>
      )}
    </main>
  )
}
