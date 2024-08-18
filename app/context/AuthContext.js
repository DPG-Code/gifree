'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '../utils/supabase/client'

export const AuthContext = createContext(null)

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const supabase = createClient()

  // Get user information from database each time that page be reload.
  useEffect(() => {
    const fetchUser = async () => {
      const { data: user } = await supabase.auth.getUser()
      setCurrentUser(user)
    }
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Login with a magic link via email.
  const loginWithMagic = async (email) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email
      })
      if (error) throw error
    } catch (error) {
      throw error
    }
  }

  // Login function.
  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
    } catch (error) {
      throw error
    }
  }

  // Sign up function.
  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) throw error
    } catch (error) {
      throw error
    }
  }

  // Logout function.
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      throw error
    }
  }

  // Function to check if the user favorites row exists.
  const checkIfFavoriteRowExists = async () => {
    try {
      // Verify if we are logged in.
      if (!currentUser) return false

      // Get favorite row from database.
      const { data: user, error } = await supabase
        .from('users')
        .select('favorites')
        .eq('user', currentUser.user.email)

      if (error) throw error
      // Return boolean depending on whether it exists.
      return user[0]?.favorites ? true : false
    } catch (error) {
      console.log(error)
      return false
    }
  }

  // Add favorite row in the user table is needed.
  const addUserRowIfNeeded = async (email) => {
    try {
      const isRowCreated = await checkIfFavoriteRowExists()
      if (isRowCreated) return

      // Create a new favorites row in database.
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
