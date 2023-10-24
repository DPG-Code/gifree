'use client'

import Link from 'next/link'

export default function Category({ name, options = [] }) {
  return (
    <>
      <h3>{name}</h3>
      <ul className='w-full flex flex-wrap gap-2'>
        {options.map((singleOption) => (
          <li key={singleOption}>
            <Link href={`/Search/${singleOption}/g`}>{singleOption}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
