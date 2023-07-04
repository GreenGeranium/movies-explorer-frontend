import { useCallback, useEffect, useMemo, useState } from "react";

const useSavedMovies = (fetchSavedMovies) => {
  const [savedMovies, setSavedMovies] = useState(null);

  const [searchInput, setSearchInput] = useState("");

  const [isShortChecked, setIsShortChecked] = useState(false);

  useEffect(() => {
    async function handleSetSavedMovies() {
      try {
        const movies = await fetchSavedMovies.getSavedMovies();
        setSavedMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }

    // получаем все фильмы, если еще не было сделано
    if (savedMovies) {
      return;
    }
    handleSetSavedMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    const result = [];

    if (!searchInput && !isShortChecked) {
      return savedMovies;
    }
    console.log(savedMovies);

    savedMovies.forEach((movie) => {
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
  }, [isShortChecked, savedMovies, searchInput]);

  const handleSetSearchSavedField = useCallback((value) => {
    setSearchInput(value);
  }, []);

  const handleSetShortSavedMovies = useCallback((event) => {
    setIsShortChecked(event.target.checked);
  }, []);

  return {
    handleSetShortSavedMovies,
    handleSetSearchSavedField,
    savedMovies: filteredMovies,
  };
};

export default useSavedMovies;
