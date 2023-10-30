'use client'

import { memo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import useForm from './useForm'
import Search from '../icons/Search'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = RATINGS[0] }) {
  const router = useRouter()

  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating
  })

  const handleChange = (e) => {
    updateKeyword(e.target.value)
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      router.push(`/Search/${keyword}/${rating}`)
    },
    [router, keyword, rating]
  )

  const handleChangeRating = (e) => {
    updateRating(e.target.value)
  }

  return (
    <form
      className='w-full flex flex-col items-center justify-center gap-4 2xl:gap-10'
      onSubmit={handleSubmit}
    >
      <div className='w-full flex items-center justify-center relative lg:w-[460px] 2xl:w-[720px]'>
        <input
          className='px-6 py-1.5 w-full bg-black/50 backdrop-blur-md text-white placeholder:text-neutral-400 font-medium text-sm outline-none rounded-full lg:px-8 lg:py-2 lg:w-[460px] lg:text-lg 2xl:px-12 2xl:py-4 2xl:w-[720px] 2xl:text-2xl'
          onChange={handleChange}
          type='text'
          value={keyword}
          placeholder='Películas, series...'
          required
        />
        <Search className='w-4 h-4 text-neutral-400 absolute right-6 lg:w-6 lg:h-6 lg:right-8 2xl:right-12' />
      </div>
      <aside className='flex items-center justify-center gap-4 2xl:gap-8'>
        <select
          className='block w-24 h-8 px-4 bg-white text-[#0d0d0d] placeholder-gray-400 font-medium text-sm rounded-full lg:w-32 lg:h-11 lg:text-lg 2xl:px-6 2xl:w-48 2xl:h-16 2xl:text-2xl'
          onChange={handleChangeRating}
          value={rating}
        >
          <option
            className='p-1 text-xs font-medium lg:p-2 lg:text-sm'
            disabled
          >
            Rating
          </option>
          {RATINGS.map((rating) => (
            <option
              className='p-1 text-xs font-medium lg:p-2 lg:text-sm'
              key={rating}
            >
              {rating}
            </option>
          ))}
        </select>
        <button
          className='px-8 py-1.5 bg-[#ee4a41] shadow-[0px_0px_16px_rgb(238,74,65,0.4)] text-white font-medium text-sm rounded-full cursor-pointer lg:px-12 lg:py-2 lg:text-lg 2xl:px-16 2xl:py-4 2xl:text-2xl'
          type='submit'
        >
          Buscar
        </button>
      </aside>
    </form>
  )
}

export default memo(SearchForm)
