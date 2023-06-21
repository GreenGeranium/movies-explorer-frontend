import "./MoviesCardList.scss";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <li className="movieslist">
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
    </li>
  );
}

export default MoviesCardList;
