import React, { useEffect } from 'react'

import MovieList from './MovieList'
import { useDispatch } from 'react-redux'
import '../../App.css'
import { fetchMovie, fetchSeries } from '../../features/movieSlice'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMovie())
    dispatch(fetchSeries())

  }, [dispatch])

  return (
    <div className='home'>
      <MovieList />
    </div>
  )
}

export default Home

