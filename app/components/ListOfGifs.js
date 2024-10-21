'use client'

import { useFavorites } from '../hooks/useFavorites'
import useAuth from '../hooks/useAuth'
import Gif from './Gif'

// Displays a component containing a list of gifs (<Gif>).
export default function ListOfGifs({ gifs }) {
  const { favorites, addFavorite } = useFavorites()
  const { user } = useAuth()

  return (
    <section className='w-full columns-2 gap-4 sm:columns-3 xl:columns-4 2xl:gap-6'>
      {gifs.map(({ id, title, url }) => (
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}
          favorites={favorites}
          addFavorite={addFavorite}
          user={user}
        />
      ))}
    </section>
  )
}
