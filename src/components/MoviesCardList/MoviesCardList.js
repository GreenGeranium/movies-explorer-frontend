import "./MoviesCardList.scss";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="movieslist">
      {props.films &&
        props.films.map((film) => {
          return <MoviesCard key={film.id} data={film}></MoviesCard>;
        })}
    </ul>
  );
}

export default MoviesCardList;
