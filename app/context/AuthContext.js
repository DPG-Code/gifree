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

  const loginWithMagic = async (email) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email
      })
      if (error) throw error
    } catch (error) {
      // console.log(error)
      throw error
    }
  }

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
    } catch (error) {
      // console.log(error)
      throw error
    }
  }

  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) throw error
    } catch (error) {
      // console.log(error)
      throw error
    }
  }

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      // console.log(error)
      throw error
    }
  }

  // Adding User(favorites) table
  const checkIfFavoriteRowExists = async () => {
    try {
      if (!currentUser) return false

      const { data: user, error } = await supabase
        .from('users')
        .select('favorites')
        .eq('user', currentUser.user.email)

      if (error) throw error
      return user[0]?.favorites ? true : false
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const addUserRowIfNeeded = async (email) => {
    try {
      const isRowCreated = await checkIfFavoriteRowExists()
      if (isRowCreated) return

      const { data, error } = await supabase
        .from('users')
        .insert([{ user: email, favorites: '[]' }])
        .select()

      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        login,
        signUp,
        loginWithMagic,
        logout,
        addUserRowIfNeeded
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
