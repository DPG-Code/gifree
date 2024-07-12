'use client'

import { useState, useEffect, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [keywordToUse, setKeywordToUse] = useState(keyword || 'random')

  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedKeyword =
        window.localStorage.getItem('lastKeyword') || keyword || 'random'
      if (storedKeyword && !keyword) setKeywordToUse(storedKeyword)
    }
  }, [keyword])

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
      if (keyword) window.localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, keywordToUse, setGifs, rating])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page: page, rating }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  }, [keywordToUse, page, setGifs, rating])

  return { loading, gifs, loadingNextPage, setPage }
}
