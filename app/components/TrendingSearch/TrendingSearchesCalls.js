'use client'

import { useState, useEffect } from 'react'

import getTrendingTerms from '@/app/services/getTrendingTermsService'
import Category from '../Category'

export default function TrendingSearchesCalls() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then(setTrends)
  }, [])

  return <Category name='Tendencias' options={trends} />
}
