import "./MoviesCardList.scss";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const { pathname } = useLocation();
  return (
    <ul className="movieslist">
      {pathname === "/movies" &&
        props.films.map((film) => {
          return <MoviesCard key={film.id} data={film}></MoviesCard>;
        })}
    </ul>
  );
}

export default MoviesCardList;
