import { useCallback, useEffect, useMemo, useState } from "react";

const useSavedMovies = (fetchSavedMovies) => {
  const [savedMovies, setSavedMovies] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [isShortChecked, setIsShortChecked] = useState(false);

  // получаем сохраненные фильмы, если еще не было сделано
  useEffect(() => {
    async function handleSetSavedMovies() {
      try {
        const movies = await fetchSavedMovies.getSavedMovies();
        setSavedMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }

    if (savedMovies) {
      return;
    }
    handleSetSavedMovies();
  }, []);

  // фильтрация фильмов
  const filteredMovies = useMemo(() => {
    const result = [];

    if (!searchInput && !isShortChecked) {
      return savedMovies;
    }

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

  const areFilmsNotFound =
    (searchInput || isShortChecked) && filteredMovies.length === 0;

  const handleSetSearchSavedField = useCallback((value) => {
    setSearchInput(value);
  }, []);

  const handleSetShortSavedMovies = useCallback((event) => {
    setIsShortChecked(event.target.checked);
  }, []);

  // лайк карточке или удаление лайка
  function handleLikeMovie(data, isLiked) {
    if (isLiked) {
      const savedMovie = savedMovies.find(
        (film) => film.movieId === data.id || film.movieId === data.movieId
      );
      fetchSavedMovies
        .removeLike(savedMovie._id)
        .then((res) => {
          setSavedMovies((films) =>
            films.filter((film) => {
              return film._id !== res._id;
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetchSavedMovies
        .addLike(data)
        .then((res) => {
          setSavedMovies([...savedMovies, res]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return {
    handleSetShortSavedMovies,
    handleSetSearchSavedField,
    savedMovies: filteredMovies,
    handleLikeMovie,
    areSavedFilmsNotFound: areFilmsNotFound,
  };
};

export default useSavedMovies;
