'use client'

import { useState } from 'react'
import useAuth from '../hooks/useAuth'

export default function Login() {
  const [email, setEmail] = useState()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    login(email)
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
