import React, { useEffect } from 'react'
import { APIKey } from '../../common/api/apiKey'
import movieApi from '../../common/api/movieApi'
import MovieList from './MovieList'
import { useDispatch } from 'react-redux'
import { getMovie } from '../../features/movieSlice'
const Home = () => {
  const movieText = "harry"
  const dispatch=useDispatch()
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => { console.log("error", err) })
   dispatch(getMovie(response.data))
    }
    fetchMovie()

  }, [])

  return (
    <div>
      Home
      <MovieList />
    </div>
  )
}

export default Home

