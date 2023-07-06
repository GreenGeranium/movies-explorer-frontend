import { useCallback, useEffect, useMemo, useState } from "react";

const useMovies = (fetchMovies) => {
  const [movies, setMovies] = useState(null);
  const [areMoviesLoading, setAreMoviesLoading] = useState(false);
  const [errorFilms, setErrorFilms] = useState(null);

  // введенное название фильма
  const [searchInput, setSearchInput] = useState("");
  // выбраны ли короткометражки
  const [isShortChecked, setIsShortChecked] = useState(false);

  useEffect(() => {
    // получение всех фильмов
    async function handleSearchAllFilms() {
      setAreMoviesLoading(true);
      try {
        const movies = await fetchMovies;
        setMovies(movies);
      } catch (error) {
        setErrorFilms(error);
      } finally {
        setAreMoviesLoading(false);
      }
    }

    // если фильмы уже есть, то ничего не происходит
    if (movies) {
      return;
    }
    handleSearchAllFilms();
  }, [fetchMovies]);

  // фильтрация фильмов
  const filteredMovies = useMemo(() => {
    // в случае, если первый рендер страницы, то берем фильмы из localstorage
    if (!searchInput && !movies) {
      /*setSearchInput(localStorage.getItem("filmToSearch"));*/
      return JSON.parse(localStorage.getItem("foundFilms"));
    }

    const result = [];

    movies.forEach((movie) => {
      const isFilmShort = movie.duration <= 40;
      const isFilmFound =
        movie.nameRU.toLowerCase().includes(searchInput.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchInput.toLowerCase());

      if (searchInput && isShortChecked) {
        if (isFilmFound && isFilmShort) {
          result.push(movie);
        }
      }

      if (searchInput && !isShortChecked) {
        if (isFilmFound) {
          result.push(movie);
        }
      }

      if (!searchInput && isShortChecked) {
        if (isFilmShort) {
          result.push(movie);
        }
      }
    });

    localStorage.setItem("foundFilms", JSON.stringify(result));

    return result;
  }, [searchInput, isShortChecked]);

  // в случае неудачного поиска
  const areFilmsNotFound =
    (searchInput || isShortChecked) && filteredMovies.length === 0;

  // установка значения поля ввода
  const handleSetSearchField = useCallback((value) => {
    setSearchInput(value);
    localStorage.setItem("filmToSearch", value);
  }, []);

  // обработка нажатия по кнопке короткометражек
  const handleSetShortMovies = useCallback((event) => {
    setIsShortChecked(event.target.checked);
    localStorage.setItem("shortChecked", event.target.checked);
  }, []);

  return {
    movies: filteredMovies,
    handleSetShortMovies,
    handleSetSearchField,
    areMoviesLoading,
    errorFilms,
    areFilmsNotFound,
  };
};

export default useMovies;
