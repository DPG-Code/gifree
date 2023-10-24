'use client'

import Gif from './Gif'

export default function ListOfGifs({ gifs }) {
  return (
    <section className='w-full columns-4 gap-4'>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </section>
  )
}
