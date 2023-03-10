import React from 'react'
import '../../App.css'

const MovieDisplay = (props) => {
        const { data } = props


        return (
                <div className='display'>
                        <img src={data.Poster} alt={data.Title} /><br />
                        <h4>{data.Title}</h4>
                        <h5> year: {data.Year}</h5><br />
                </div>
        )
}

export default MovieDisplay