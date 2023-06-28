import "./MoviesCardList.scss";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const { pathname } = useLocation();
  return (
    <ul className="movieslist">
      {(pathname === "/movies" || pathname === "/saved-movies") &&
        props.films.map((film) => {
          return (
            <MoviesCard
              key={film.id ? film.id : film._id}
              data={film}
              savedFilms={props.savedFilms}
              handleLikeMovie={props.handleLikeMovie}
            ></MoviesCard>
          );
        })}
    </ul>
  );
}

export default MoviesCardList;
