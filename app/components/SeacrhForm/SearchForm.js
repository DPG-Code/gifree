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
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='text'
        value={keyword}
        placeholder='Buscar gifs'
        required
      />
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating:</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <button>Search</button>
    </form>
  )
}

export default memo(SearchForm)
