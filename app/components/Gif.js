'use client'

import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Heart from './icons/Heart'

function Gif({ title, id, url }) {
  return (
    <div className='mb-4 relative'>
      <div className='p-2 bg-white/10 backdrop-blur-md text-white rounded-full absolute top-2 right-2 z-10'>
        <Heart />
      </div>
      <Link className='relative' href={`/Gif/${id}`}>
        <span className='p-2 w-full bg-white/5 backdrop-blur-md truncate text-white font-medium text-xs rounded-bl-xl rounded-br-xl absolute bottom-0 left-0'>
          {title}
        </span>
        <Image
          className='w-full rounded-xl'
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
