import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.scss";

function SavedMovies(props) {
  return (
    <div className="savedmovies">
      <SearchForm></SearchForm>
      <MoviesCardList
        films={props.films}
        handleLikeMovie={props.handleLikeMovie}
        savedFilms={props.savedFilms}
      ></MoviesCardList>
    </div>
  );
}

export default SavedMovies;
