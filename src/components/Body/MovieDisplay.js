import React from 'react'

const MovieDisplay = (props) => {
        const { data } = props


        return (
                <div>
                        <h4>{data.Title}</h4><br />
                        <img src={data.Poster} alt={data.Title} /><br />
                        <h5> year: {data.Year}</h5><br />
                </div>
        )
}

export default MovieDisplay