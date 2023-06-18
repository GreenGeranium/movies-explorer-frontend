import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <div className="movies">
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
    </div>
  );
}

export default Movies;
