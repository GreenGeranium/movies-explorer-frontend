import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  return (
    <div className="movies">
      <SearchForm
        onSearchFilms={props.onSearchFilms}
        isShortFilmsChecked={props.isShortFilmsChecked}
        handleShortFilms={props.handleShortFilms}
      ></SearchForm>
      <Preloader isPreloaderLoading={props.isPreloaderLoading}></Preloader>
      <MoviesCardList films={props.filteredFilms}></MoviesCardList>
      <button className="movies__showmore">Ещё</button>
    </div>
  );
}

export default Movies;
