'use client'

import { useEffect, useState } from 'react'
import { useGifs } from './useGifs'
import getSingleGif from '../services/getSingleGif'

// Get a single information gif, and return his states: -> gif, isLoading, isError.
export default function useSingleGifs({ id }) {
  const { gifs } = useGifs()
  // Get gifs from cache.
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(
    function () {
      if (!gif) {
        setIsLoading(true)
        getSingleGif({ id })
          .then((gif) => {
            setGif(gif) // Can pass "setGif()" like parameter
            setIsLoading(false)
            setIsError(false)
          })
          .catch((err) => {
            setIsLoading(false)
            setIsError(true)
          })
      }
    },
    [gif, id]
  )

  return { gif, isLoading, isError }
}
