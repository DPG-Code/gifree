'use client'

import { useGifs } from './hooks/useGifs'
import SearchForm from './components/SeacrhForm/SearchForm'
import ListOfGifs from './components/ListOfGifs'
import TrendingSearches from './components/TrendingSearch/TrendingSearches'

export default function Home() {
  const { loading, gifs } = useGifs()

  return (
    <main className='min-h-screen flex flex-col items-center justify-start p-24'>
      <h1 className='text-6xl'>GiFree</h1>
      <p className='text-4xl'>Encontraras gifs de lo que imagines!</p>
      <SearchForm />
      <TrendingSearches />
      <h3 className='text-2xl'>Gifs recientes</h3>
      {loading ? <span>loading...</span> : <ListOfGifs gifs={gifs} />}
    </main>
  )
}
