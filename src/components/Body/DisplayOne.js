import React, { useEffect } from 'react'
import '../../App.css'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchSingleMovie, removeFetchSingleMovie } from '../../features/movieSlice'
import { useSelector } from 'react-redux'
const DisplayOne = () => {
        const dispatch = useDispatch()
        const { imdbID } = useParams()//to fetch data from the link
        const singleShow = useSelector(state => state.movieReducer.singleShow)

        useEffect(() => {

                dispatch(fetchSingleMovie(imdbID))
                return () => {
                        dispatch(removeFetchSingleMovie())
                }
        }, [dispatch, imdbID])
        console.log('yes', singleShow)

        return (
                <div className='single-detail'>
                        <div className='left-view'>
                                <h3> Title: {singleShow.Title}</h3>
                                <p> Year: {singleShow.Year}</p>
                                <p>Rated: {singleShow.Rated}</p>
                                <p>Runtime: {singleShow.Runtime}</p>
                                <p>Genre: {singleShow.Genre}</p>
                                <p>Writer: {singleShow.Writer}</p>
                                <p>Language: {singleShow.Language}</p>

                        </div>
                        <div className='right-view'>
                                <img src={singleShow.Poster} alt={singleShow.Title} />
                                <h3> Title: {singleShow.Title}</h3>
                                <h4>Actors: {singleShow.Actors}</h4>
                                <p>Country: {singleShow.Country}</p>
                                <h5> Director: {singleShow.Director}</h5>



                        </div>
                </div>
        )
}

export default DisplayOne