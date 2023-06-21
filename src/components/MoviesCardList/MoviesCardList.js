import "./MoviesCardList.scss";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <ul className="movieslist">
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
      <MoviesCard></MoviesCard>
    </ul>
  );
}

export default MoviesCardList;
