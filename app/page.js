'use client'

import { useGifs } from './hooks/useGifs'
import SearchForm from './components/SeacrhForm/SearchForm'
import ListOfGifs from './components/ListOfGifs'
import TrendingSearches from './components/TrendingSearch/TrendingSearches'

export default function Home() {
  const { loading, gifs } = useGifs()

  return (
    <main className='px-12 py-32 min-h-screen flex flex-col items-center justify-start gap-12'>
      <header className='mb-6 flex flex-col items-center justify-center gap-2'>
        <h1 className='text-white font-bold text-7xl'>Gifree</h1>
        <p className='text-neutral-400 font-medium text-xl'>
          Encontraras gifs de lo que imagines!
        </p>
        <SearchForm />
      </header>
      <TrendingSearches />
      <h3 className='w-full text-left text-white font-semibold text-2xl'>
        Gifs recientes
      </h3>
      {loading ? <span>loading...</span> : <ListOfGifs gifs={gifs} />}
    </main>
  )
}
