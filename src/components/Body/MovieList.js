import React from "react";
import { useSelector } from "react-redux";
import MovieDisplay from "./MovieDisplay";
const MovieList = () => {
        const movie = useSelector((state) => state.movieReducer.movie);


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

        return (
                <div>
                        <h3>Movie List</h3>
                        <div>{displayMovie}</div>
                </div>
        );
};

export default MovieList;
