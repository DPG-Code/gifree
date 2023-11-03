'use client'

import React, { Suspense } from 'react'
import { useNearScreen } from '@/app/hooks/useNearScreen'
import Loader from '../Loader'

const TrendingSearchesCalls = React.lazy(() =>
  import('./TrendingSearchesCalls')
)

export default function TrendingSearches() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return (
    <section className='w-full flex flex-col gap-4 2xl:gap-12' ref={fromRef}>
      <Suspense
        fallback={
          <Loader className='mx-auto my-6 w-6 h-6 text-white lg:w-10 lg:h-10 2xl:w-14 2xl:h-14' />
        }
      >
        {isNearScreen ? (
          <TrendingSearchesCalls />
        ) : (
          <Loader className='mx-auto my-6 w-6 h-6 text-white lg:w-10 lg:h-10 2xl:w-14 2xl:h-14' />
        )}
      </Suspense>
    </section>
  )
}
