'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function Category({ name, options = [] }) {
  return (
    <>
      <h3 className='w-full text-left text-white font-semibold text-2xl lg:text-3xl 2xl:text-5xl'>
        {name}
      </h3>
      <ul className='w-full flex flex-wrap gap-1 gap-y-2 lg:gap-3 lg:gap-y-4 2xl:gap-4 2xl:gap-y-6'>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link href={`/search/${singleOption}/g`}>
              <Badge variant='secondary'>{singleOption}</Badge>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
