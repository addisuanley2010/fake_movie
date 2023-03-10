import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
const MovieDisplay = (props) => {
        const { data } = props


        return (
                <div className='display'>
                        <Link to={`/detail/${data.imdbID}`}>
                        <img src={data.Poster} alt={data.Title} /><br />
                        <h4>{data.Title}</h4>
                        <h5> year: {data.Year}</h5><br />
                        </Link>
                </div>
        )
}

export default MovieDisplay