'use client'

import { useState } from 'react'
import useAuth from '../hooks/useAuth'

export default function Login() {
  const [isLoginPage, setIsLoginPage] = useState(true)
  const { login, signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = Object.fromEntries(new FormData(e.target))
    // organizar
    try {
      if (isLoginPage) login(email, password)
      else {
        signUp(email, password)
        // mostrar mensaje de verificar email
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='min-h-screen flex flex-col items-center justify-start p-24'>
      <h2 className='text-white'>Accede</h2>
      <form onSubmit={handleSubmit}>
        <input name='email' type='email' placeholder='email' />
        <input name='password' type='text' placeholder='password' />
        <button type='submit'>{isLoginPage ? 'Entrar' : 'Crear cuenta'}</button>
      </form>
      <button onClick={() => setIsLoginPage(!isLoginPage)}>
        {isLoginPage ? '¿No tienes una cuenta?' : '¿Tienes una cuenta?'}
      </button>
    </main>
  )
}
