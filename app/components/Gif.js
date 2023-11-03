'use client'

import { memo } from 'react'
import Link from 'next/link'
import Heart from './icons/Heart'

function Gif({ title, id, url }) {
  return (
    <div className='mb-4 relative 2xl:mb-6'>
      <div className='p-2 bg-primary-black/30 backdrop-blur-md text-white rounded-full absolute top-2 right-2 z-10 2xl:p-4 2xl:top-4 2xl:right-4'>
        <Heart className='w-4 h-4 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8' />
      </div>
      <Link className='relative' href={`/Gif/${id}`}>
        <span className='p-2 w-full bg-primary-black/40 backdrop-blur-md truncate text-white font-semibold text-[10px] rounded-bl-lg rounded-br-lg absolute bottom-0 left-0 lg:px-3 lg:text-xs 2xl:px-6 2xl:py-3 2xl:text-lg 2xl:rounded-bl-xl 2xl:rounded-br-xl'>
          {title}
        </span>
        <img
          className='w-full rounded-lg 2xl:rounded-xl'
          width='240'
          height='240'
          src={url}
          alt={title}
        />
      </Link>
    </div>
  )
}

export default memo(Gif)
