'use client'

import { memo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import useForm from './useForm'
import { useForm as useFormReact } from 'react-hook-form'
import Search from '../icons/Search'
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

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
  const router = useRouter()

  const { keyword } = useForm({
    initialKeyword,
    initialRating
  })

  const form = useFormReact()

  const onSubmit = useCallback(
    ({ keyword, rating = 'g' }) => {
      router.push(`/Search/${keyword}/${rating}`)
    },
    [router]
  )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col items-center justify-center gap-4 2xl:gap-10'
      >
        <FormField
          control={form.control}
          name='keyword'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <div className='w-full flex items-center justify-center relative'>
                  <Input
                    value={keyword}
                    placeholder='Buscar...'
                    required
                    {...field}
                  />
                  <Search className='w-4 h-4 text-neutral-400 absolute right-4 lg:w-5 lg:h-5 lg:right-6 2xl:right-8' />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className='w-full flex items-center justify-center gap-4 2xl:gap-10'>
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
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default memo(SearchForm)
