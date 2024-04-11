'use client'

import { useState } from 'react'
import { createClient } from '../utils/supabase/client'

export default function Login() {
  const [email, setEmail] = useState()
  const supabase = createClient()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email
      })
      if (error) throw error
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='min-h-screen flex flex-col items-center justify-start p-24'>
      <h2 className=''>login and register</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type='email'
          placeholder='email'
        />
        <button type='submit'>login</button>
      </form>
    </main>
  )
}
