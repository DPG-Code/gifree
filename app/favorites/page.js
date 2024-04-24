'use client'

import { useEffect, useState } from 'react'
import { createClient } from '../utils/supabase/client'

export default function Favorites() {
  const [currentUser, setCurrentUser] = useState(null)
  const [favorites, setFavorites] = useState([])

  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      const { data: user } = await supabase.auth.getUser()
      setCurrentUser(user)
    }
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const getFavorites = async () => {
      if (currentUser) {
        try {
          let { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('user', currentUser.user.email)
          setFavorites(JSON.parse(user[0].favorites))
        } catch (error) {
          console.log(error)
        }
      }
    }
    getFavorites()
  }, [currentUser, supabase])

  return (
    <main className='min-h-screen flex flex-col items-center justify-start p-24'>
      <h2 className=''>Favorites</h2>
      {favorites.length > 0
        ? favorites.map((gif, i) => <p key={i}>{gif}</p>)
        : 'Añade un Gif y se mostrará aquí'}
    </main>
  )
}
