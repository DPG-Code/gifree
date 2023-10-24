'use client'

import Link from 'next/link'

export default function Category({ name, options = [] }) {
  return (
    <>
      <h3 className='w-full text-left text-white font-semibold text-2xl'>
        {name}
      </h3>
      <ul className='w-full flex flex-wrap gap-2 gap-y-4'>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link
              className='px-4 py-1.5 bg-white/10 text-neutral-300 font-normal text-xs rounded-full'
              href={`/Search/${singleOption}/g`}
            >
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
