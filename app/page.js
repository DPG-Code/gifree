'use client'

import { useGifs } from './hooks/useGifs'
import SearchForm from './components/SeacrhForm/SearchForm'
import ListOfGifs from './components/ListOfGifs'
import TrendingSearches from './components/TrendingSearch/TrendingSearches'
import Loader from './components/Loader'

export default function Home() {
  const { loading, gifs } = useGifs()

  return (
    <main className='home-container w-full px-10 py-32 min-h-screen flex flex-col items-center justify-start gap-12 relative overflow-hidden 2xl:px-20 2xl:py-52 2xl:gap-20'>
      <header className='flex flex-col items-center justify-center gap-2'>
        <img
          className='w-56 invert xl:w-96 xl:mb-2 2xl:w-[480px] 2xl:mb-3'
          src='/gifree.png'
          alt='header logo'
        />
        <p className='mb-8 text-center text-neutral-300 font-medium text-base lg:text-2xl 2xl:mb-12 2xl:text-4xl'>
          ¡Encontraras gifs de lo que imagines!
        </p>
        <SearchForm />
      </header>
      <TrendingSearches />
      {loading ? (
        <Loader className='mx-auto my-6 w-6 h-6 text-white lg:w-10 lg:h-10 2xl:w-14 2xl:h-14' />
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
