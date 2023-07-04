import { useCallback, useEffect, useMemo, useState } from "react";

const useMovies = (fetchMovies) => {
  const [movies, setMovies] = useState(null);
  const [areMoviesLoading, setAreMoviesLoading] = useState(false);
  const [errorFilms, setErrorFilms] = useState(null);

  const [searchInput, setSearchInput] = useState("");

  const [isShortChecked, setIsShortChecked] = useState(false);

  useEffect(() => {
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

    // получаем все фильмы, если еще не было сделано
    if (movies) {
      return;
    }
    handleSearchAllFilms();
  }, []);

  const filteredMovies = useMemo(() => {
    const result = [];

    if (!searchInput) {
      return JSON.parse(localStorage.getItem("foundFilms"));
    }

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
  }, [searchInput, movies, isShortChecked]);

  const handleSetSearchField = useCallback(
    (value) => {
      setSearchInput(value);
      localStorage.setItem("filmToSearch", value);
    },
    [searchInput]
  );

  const handleSetShortMovies = useCallback((event) => {
    setIsShortChecked(event.target.checked);
    localStorage.setItem("shortChecked", event.target.checked);
  }, []);

  return {
    areMoviesLoading,
    handleSetShortMovies,
    handleSetSearchField,
    movies: filteredMovies,
    errorFilms,
  };
};

export default useMovies;
