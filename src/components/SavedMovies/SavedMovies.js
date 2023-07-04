import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.scss";

function SavedMovies(props) {
  return (
    <div className="savedmovies">
      <SearchForm
        onSearchFilms={props.onSearchFilms}
        handleShortFilms={props.handleShortFilms}
      ></SearchForm>
      <MoviesCardList
        films={props.savedFilms}
        handleLikeMovie={props.handleLikeMovie}
        savedFilms={props.savedFilms}
      ></MoviesCardList>
    </div>
  );
}

export default SavedMovies;
