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
import { useToast } from '@/components/ui/use-toast'

export default function Login() {
  const router = useRouter()
  const [isLoginPage, setIsLoginPage] = useState(true)
  const { user, login, signUp } = useAuth()

  const form = useForm()
  const { toast } = useToast()

  useEffect(() => {
    if (user?.user) router.push('/')
  }, [router, user])

  const onSubmit = async (values) => {
    const { email, password } = values
    try {
      if (isLoginPage) {
        await login(email, password)
      } else {
        await signUp(email, password)
        toast({
          description: 'Dirígete a tu email y verifica tu cuenta.'
        })
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: '¡Oh no! Algo salió mal.',
        description: 'Hay un problema con tu usuario o contraseña.'
      })
    }
  }

  return (
    <main className='px-10 py-28 min-h-screen flex flex-col items-center justify-start gap-4 lg:px-12 lg:py-36 2xl:px-24 2xl:py-52 2xl:gap-6'>
      <h2 className='mb-4 text-center text-white font-semibold text-xl lg:mb-8 lg:text-2xl 2xl:mb-12 2xl:text-4xl'>
        Accede y disfruta de infinidad de gifs
      </h2>
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
                  <Input placeholder='example@gmail.com' required {...field} />
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
                  <Input
                    type='password'
                    placeholder='******'
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit'>
            {isLoginPage ? 'Entrar' : 'Crear cuenta'}
          </Button>
        </form>
        <button
          className='font-medium text-neutral-400 2xl:text-lg'
          onClick={() => setIsLoginPage(!isLoginPage)}
        >
          {isLoginPage ? '¿No tienes una cuenta?' : '¿Tienes una cuenta?'}
        </button>
      </Form>
    </main>
  )
}
