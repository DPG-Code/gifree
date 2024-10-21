'use client'

import { useRouter } from 'next/navigation'
import { memo, useCallback } from 'react'
import useForm from './useForm'
import { useForm as useFormReact } from 'react-hook-form'
import { Search } from '../icons/Icons'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'

// Display a form using 'React hook form'.
function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
  const router = useRouter()

  const { keyword } = useForm({
    initialKeyword,
    initialRating
  })

  const form = useFormReact()

  // Makes a search for the keyword, redirecting the page to '/Search/${keyword}/${rating}' and
  // save the keyword in localstorage.
  const onSubmit = useCallback(
    ({ keyword, rating = 'g' }) => {
      router.push(`/Search/${keyword}/${rating}`)
      localStorage.setItem('lastKeyword', keyword)
    },
    [router]
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col items-center justify-center gap-4 xl:w-auto xl:flex-row 2xl:gap-6'
      >
        <FormField
          control={form.control}
          name='keyword'
          render={({ field }) => (
            <FormItem className='w-full xl:w-auto'>
              <FormControl>
                <div className='w-full flex items-center justify-center relative xl:w-80 2xl:w-[420px]'>
                  <Input
                    value={keyword}
                    placeholder='Buscar...'
                    required
                    {...field}
                  />
                  <Search className='w-4 h-4 text-neutral-400 absolute right-3 lg:w-5 lg:h-5 lg:right-4 2xl:right-8 2xl:w-6 2xl:h-6' />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className='w-full flex items-center justify-center gap-4 xl:w-auto 2xl:gap-6'>
          <FormField
            control={form.control}
            name='rating'
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-[86px] lg:w-[102px] 2xl:w-[112px]'>
                      <SelectValue placeholder='g' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Rating</SelectLabel>
                      <SelectItem value='g'>g</SelectItem>
                      <SelectItem value='pg'>pg</SelectItem>
                      <SelectItem value='pg-13'>pg-13</SelectItem>
                      <SelectItem value='r'>r</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button size='md' type='submit'>
            Buscar
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default memo(SearchForm)
