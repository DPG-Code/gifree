'use client'

import { memo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import useForm from './useForm'

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
      className='w-full flex flex-wrap items-center justify-center gap-2'
      onSubmit={handleSubmit}
    >
      <input
        className='px-6 py-1.5 bg-white/10 text-white font-medium text-sm outline-none rounded-full'
        onChange={handleChange}
        type='text'
        value={keyword}
        placeholder='Buscar gifs'
        required
      />
      <select
        className='px-4 py-1.5 bg-white/10 text-white font-medium text-sm ouline-none rounded-full'
        onChange={handleChangeRating}
        value={rating}
      >
        <option disabled>Rating:</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <button
        className='px-6 py-1.5 bg-[#ee4a41] text-white font-medium text-sm rounded-full cursor-pointer'
        type='submit'
      >
        Search
      </button>
    </form>
  )
}

export default memo(SearchForm)
