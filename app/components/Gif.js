'use client'

import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Gif({ title, id, url }) {
  return (
    <div>
      <span>favorite</span>
      <Link href={`/Gif/${id}`}>
        <span>{title}</span>
        <Image
          className='w-full'
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
