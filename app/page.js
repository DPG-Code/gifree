'use client'

import { useGifs } from './hooks/useGifs'
import SearchForm from './components/SeacrhForm/SearchForm'
import ListOfGifs from './components/ListOfGifs'
import TrendingSearches from './components/TrendingSearch/TrendingSearches'

export default function Home() {
  const { loading, gifs } = useGifs()

  return (
    <main className='home-container px-10 py-32 min-h-screen flex flex-col items-center justify-start gap-12 relative 2xl:px-20 2xl:py-52 2xl:gap-20'>
      <header className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-white font-bold text-7xl lg:text-8xl 2xl:text-[172px]'>
          Gifree
        </h1>
        <p className='mb-8 text-center text-neutral-300 font-medium text-xl lg:text-2xl 2xl:mb-12 2xl:text-4xl'>
          ¡Encontraras gifs de lo que imagines!
        </p>
        <SearchForm />
      </header>
      <TrendingSearches />
      {loading ? (
        <span>loading...</span>
      ) : (
        <div className='w-full flex flex-col gap-4 2xl:gap-12'>
          <h3 className='w-full text-left text-white font-semibold text-2xl lg:text-3xl 2xl:text-5xl'>
            Gifs recientes
          </h3>
          <ListOfGifs gifs={gifs} />
        </div>
      )}
    </main>
  )
}
