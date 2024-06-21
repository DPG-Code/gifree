import { useEffect, useState } from 'react'
import useAuth from './useAuth'
import { createClient } from '../utils/supabase/client'

export function useFavorites() {
  const { user, addUserRowIfNeeded } = useAuth()
  const [favorites, setFavorites] = useState([])

  const supabase = createClient()

  useEffect(() => {
    const getFavorites = async () => {
      if (user && user.user) {
        try {
          let { data: userData, error } = await supabase
            .from('users')
            .select('favorites')
            .eq('user', user?.user?.email)
          if (error) throw error
          setFavorites(JSON.parse(userData[0]?.favorites))
        } catch (error) {
          console.log(error)
        }
      }
    }
    getFavorites()
  }, [user, supabase])

  const addFavorite = async (url) => {
    await addUserRowIfNeeded(user?.user?.email)
    const isFavorite = favorites.includes(url)

    const updatedFavorites = isFavorite
      ? favorites.filter((item) => item !== url)
      : [...favorites, url]

    setFavorites(updatedFavorites)

    try {
      const { data, error } = await supabase
        .from('users')
        .update({ favorites: JSON.stringify(updatedFavorites) })
        .eq('user', user?.user?.email)
        .select()
      if (error) throw error
      setFavorites(updatedFavorites)
    } catch (error) {
      console.log(error)
    }
  }

  return { favorites, addFavorite }
}
