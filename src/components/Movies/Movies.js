import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <div className="movies">
      <SearchForm onSearchFilms={props.onSearchFilms}></SearchForm>
      <MoviesCardList films={props.filteredFilms}></MoviesCardList>
      <button className="movies__showmore">Ещё</button>
    </div>
  );
}

export default Movies;
