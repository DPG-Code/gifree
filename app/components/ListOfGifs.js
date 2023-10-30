'use client'

import Gif from './Gif'

export default function ListOfGifs({ gifs }) {
  return (
    <section className='w-full columns-2 gap-4 sm:columns-3 xl:columns-4 2xl:gap-6'>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </section>
  )
}
