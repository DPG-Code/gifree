'use client'

import Link from 'next/link'

export default function Category({ name, options = [] }) {
  return (
    <>
      <h3 className='w-full text-left text-white font-semibold text-2xl lg:text-3xl 2xl:text-5xl'>
        {name}
      </h3>
      <ul className='w-full flex flex-wrap gap-2 gap-y-3 lg:gap-3 lg:gap-y-5 2xl:gap-4 2xl:gap-y-8'>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link
              className='px-4 py-1.5 bg-white/5 text-neutral-400 font-normal text-xs rounded-full lg:px-6 lg:py-2 lg:text-base 2xl:px-8 2xl:py-3 2xl:text-2xl'
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
