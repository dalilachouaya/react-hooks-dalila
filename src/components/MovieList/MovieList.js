import React from "react";
import "./MovieList.css";
import { MovieCards } from "../MovieCards/MovieCards";
const MovieList = ({ posters }) => {
    return (
    <>
    <div className="Movielist">
        {posters.map((film, key) => (
        <MovieCards film={film} key={key}/>
        ))}
    </div>
    </>
    );
};
export default MovieList;

