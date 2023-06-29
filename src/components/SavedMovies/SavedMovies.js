import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.scss";

function SavedMovies(props) {
  return (
    <div className="savedmovies">
      <SearchForm
        onSearchFilms={props.onSearchFilms}
        isShortSavedFilmsChecked={props.isShortSavedFilmsChecked}
        isSavedMovies={true}
        handleShortFilms={props.handleShortFilms}
      ></SearchForm>
      {props.filteredSavedFilms.length > 0 ? (
        <MoviesCardList
          films={props.filteredSavedFilms}
          handleLikeMovie={props.handleLikeMovie}
          savedFilms={props.savedFilms}
        ></MoviesCardList>
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
