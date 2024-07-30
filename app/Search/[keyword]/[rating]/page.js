'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useNearScreen } from '../../../hooks/useNearScreen'
import { useGifs } from '../../../hooks/useGifs'
import debounce from 'just-debounce-it'
import ListOfGifs from '../../../components/ListOfGifs'
import SearchForm from '../../../components/SeacrhForm/SearchForm'
import Loader from '@/app/components/Loader'

export default function Search({ params }) {
  const { keyword, rating = 'g' } = params
  const { loading, gifs, setPage } = useGifs({ keyword, rating })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    distance: '200px',
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `${gifs.length} resultados de ${decodeURI(keyword)}` : ''

  // eslint-disable-next-line
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <main className='home-container w-full px-10 py-32 min-h-screen flex flex-col items-center justify-start relative 2xl:px-20 2xl:py-52 2xl:gap-20'>
      <title>{title}</title>
      <section className='w-full flex flex-col items-center justify-start gap-6 xl:gap-12 2xl:gap-16'>
        <h2 className='text-white font-bold text-6xl lg:text-7xl 2xl:text-8xl'>
          Gifree
        </h2>
        <SearchForm initialKeyword={keyword} initialRating={rating} />
        <h3 className='w-full text-left text-white font-semibold text-2xl xl:text-4xl 2xl:text-5xl'>
          {decodeURI(keyword)}
        </h3>
        {loading ? (
          <Loader className='mx-auto my-6 w-6 h-6 text-white lg:w-10 lg:h-10 2xl:w-14 2xl:h-14' />
        ) : (
          <>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
          </>
        )}
      </section>
    </main>
  )
}
