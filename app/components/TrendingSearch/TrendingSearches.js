'use client'

import React, { Suspense } from 'react'
import { useNearScreen } from '@/app/hooks/useNearScreen'

const TrendingSearchesCalls = React.lazy(() =>
  import('./TrendingSearchesCalls')
)

export default function TrendingSearches() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '200px' })

  return (
    <section className='w-full flex flex-col' ref={fromRef}>
      <Suspense fallback={<span>loading...</span>}>
        {isNearScreen ? <TrendingSearchesCalls /> : <span>loading...</span>}
      </Suspense>
    </section>
  )
}
