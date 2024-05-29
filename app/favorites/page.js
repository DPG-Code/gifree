'use client'

import Gif from '../components/Gif'
import useAuth from '../hooks/useAuth'
import { useFavorites } from '../hooks/useFavorites'

export default function Favorites() {
  const { favorites, addFavorite } = useFavorites()
  const { user } = useAuth()

  return (
    <main className='min-h-screen flex flex-col items-center justify-start p-24'>
      <h2 className='mb-4 w-full text-left text-white font-semibold text-2xl lg:text-3xl 2xl:text-5xl'>
        Favorites
      </h2>
      {user?.user ? (
        favorites.length > 0 ? (
          <section className='w-full columns-2 gap-4 sm:columns-3 xl:columns-4 2xl:gap-6'>
            {favorites.map((url) => (
              <Gif
                key={url}
                id={url}
                url={url}
                addFavorite={addFavorite}
                user={user}
              />
            ))}
          </section>
        ) : (
          'Añade un Gif y se mostrará aquí'
        )
      ) : (
        'Accede a tu cuanta para poder guardar tus Gifs'
      )}
    </main>
  )
}
