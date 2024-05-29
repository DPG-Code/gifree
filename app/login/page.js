'use client'

import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useRouter } from 'next/navigation'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login() {
  const router = useRouter()
  const [isLoginPage, setIsLoginPage] = useState(true)
  const { user, login, signUp } = useAuth()

  const form = useForm()

  useEffect(() => {
    if (user?.user) router.push('/')
  }, [router, user])

  const onSubmit = async (values) => {
    const { email, password } = values
    // organizar
    try {
      if (isLoginPage) {
        await login(email, password)
        router.push('/')
      } else {
        signUp(email, password)
        // mostrar mensaje de verificar email
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='p-24 min-h-screen flex flex-col items-center justify-start gap-4 2xl:py-36'>
      <h2 className='text-white'>Accede</h2>
      <Form {...form}>
        <form
          className='w-full flex flex-col items-center justify-center gap-4 2xl:gap-6'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='example@gmail.com' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='******' {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit'>
            {isLoginPage ? 'Entrar' : 'Crear cuenta'}
          </Button>
        </form>
        <button onClick={() => setIsLoginPage(!isLoginPage)}>
          {isLoginPage ? '¿No tienes una cuenta?' : '¿Tienes una cuenta?'}
        </button>
      </Form>
    </main>
  )
}
