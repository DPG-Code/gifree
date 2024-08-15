'use client'

import useAuth from '../hooks/useAuth'
import { useFavorites } from '../hooks/useFavorites'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Gif from '../components/Gif'

// Page that show a list of user favorites gifs, only if the user is authorized.
export default function Favorites() {
  const { favorites, addFavorite } = useFavorites()
  const { user } = useAuth()

  // Auto smooth animations.
  const [favoritesGifParent] = useAutoAnimate()

  return (
    <main className='px-10 py-28 min-h-screen flex flex-col items-center justify-start lg:px-12 lg:py-36 2xl:px-24 2xl:py-52'>
      <h2 className='mb-4 w-full text-left text-white font-semibold text-2xl lg:mb-8 lg:text-3xl 2xl:mb-12 2xl:text-5xl'>
        Favoritos
      </h2>
      {user?.user ? (
        favorites.length > 0 ? (
          <section
            ref={favoritesGifParent}
            className='w-full columns-2 gap-4 sm:columns-3 xl:columns-4 2xl:gap-6'
          >
            {favorites.map((gif) => (
              <Gif
                key={gif.id}
                id={gif.id}
                url={gif.url}
                favorites={favorites}
                addFavorite={addFavorite}
                user={user}
              />
            ))}
          </section>
        ) : (
          <p className='text-center text-sm text-neutral-400 lg:text-lg 2xl:text-2xl'>
            Añade un Gif y se mostrará aquí
          </p>
        )
      ) : (
        <p className='text-center text-sm text-neutral-400 lg:text-lg 2xl:text-2xl'>
          Accede a tu cuanta para poder guardar tus Gifs
        </p>
      )}
    </main>
  )
}
