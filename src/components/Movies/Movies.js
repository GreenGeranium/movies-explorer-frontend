import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";
import useResizeWindow from "../../hooks/ResizeHook";

function Movies(props) {
  const {
    cardsPerPage,
    cardsPerAdditionalLine,
    handleResize,
    setCardsPerPage,
  } = useResizeWindow();

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="movies">
      <SearchForm
        onSearchFilms={props.onSearchFilms}
        isShortFilmsChecked={props.isShortFilmsChecked}
        handleShortFilms={props.handleShortFilms}
      ></SearchForm>
      <Preloader isPreloaderLoading={props.isPreloaderLoading}></Preloader>
      {props.isErrorOnLoadingFilms && (
        <h4 className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </h4>
      )}
      {props.filteredFilms.length === 0 ? (
        <h4 className="movies__error">Ничего не найдено</h4>
      ) : (
        <>
          <MoviesCardList
            handleLikeMovie={props.handleLikeMovie}
            savedFilms={props.savedFilms}
            films={props.filteredFilms.slice(0, cardsPerPage)}
          ></MoviesCardList>
          {props.filteredFilms.length >= cardsPerPage && (
            <button
              className="movies__showmore"
              onClick={() => {
                setCardsPerPage(cardsPerPage + cardsPerAdditionalLine);
              }}
            >
              Ещё
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default Movies;
