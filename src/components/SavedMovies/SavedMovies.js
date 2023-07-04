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
      {props.areFilmsNotFound ? (
        <h4 className="movies__error">Ничего не найдено</h4>
      ) : (
        <MoviesCardList
          films={props.savedFilms}
          handleLikeMovie={props.handleLikeMovie}
          savedFilms={props.savedFilms}
        ></MoviesCardList>
      )}
    </div>
  );
}

export default SavedMovies;
