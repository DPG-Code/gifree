'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '../utils/supabase/client'

export const AuthContext = createContext(null)

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      const { data: user } = await supabase.auth.getUser()
      setCurrentUser(user)
    }
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const login = async (email) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email
      })
      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user: currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
