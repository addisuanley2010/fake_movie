import React from "react";
import { useSelector } from "react-redux";
import MovieDisplay from "./MovieDisplay";

import '../../App.css'

const MovieList = () => {
        const movie = useSelector((state) => state.movieReducer.movie);
        const series = useSelector((state) => state.movieReducer.show);
        console.log(series)
        const displayMovie =
                movie.Response === "True" ? (
                        movie.Search.map((movie, index) => (
                                <MovieDisplay key={index} data={movie} />
                        ))
                ) : (
                        <div>
                                <h3>{movie.Error}</h3>
                        </div>
                );
        const displaySeries = series.Response === "True" ? (
                series.Search.map((series, index) => (
                        <MovieDisplay key={index} data={series} />
                ))
        ) : (
                <div>
                        <h3>{series.Error}</h3>
                </div>
        );

        return (
                <div className="parent-list">
                        <h3>List Of Movies</h3>
                        <div className="list">
                                {displayMovie}

                        </div>
                        <hr/>
                        <h3>List Of Series</h3>

                        <div className="list">
                                {displaySeries}

                        </div>
                </div>
        );
};

export default MovieList;
