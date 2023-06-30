import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import { useEffect, useState } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import moviesapi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MainApi from "../../utils/MainApi";

function App() {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));
  const pathsOfHeader = ["/", "/movies", "/saved-movies", "/profile"];
  const [savedFilms, setSavedFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [filteredSavedFilms, setFilteredSavedFilms] = useState([]);
  const [isPreloaderLoading, setIsPreloaderLoading] = useState(false);
  const [isShortFilmsChecked, setIsShortFilmsShecked] = useState(false);
  const [isShortSavedFilmsChecked, setIsShortSavedFilmsChecked] =
    useState(false);
  const [isErrorOnLoadingFilms, setIsErrorOnLoadingFilms] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const [authentificationError, setAuthenticationError] = useState("");
  const [editProfileMessage, setEditProfileMessage] = useState("");

  const navigate = useNavigate();

  const mainapi = new MainApi({
    baseUrl: "http://api.geranius.nomoredomains.rocks",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  // определить короткометражки или нет в зависимости какая страница открыта, сохраненки или нет
  function handleShortFilmsChecked(isSavedMovies) {
    isSavedMovies
      ? setIsShortSavedFilmsChecked(!isShortSavedFilmsChecked)
      : setIsShortFilmsShecked(!isShortFilmsChecked);
  }

  // редактирование пользователя
  function handleEditAccountInformation(data) {
    mainapi
      .editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        setEditProfileMessage("Профиль успешно изменен");
      })
      .catch((error) => {
        setEditProfileMessage(error);
      });
  }

  // регистрация аккаунта
  function handleRegister(data) {
    mainapi
      .handleRegister(data)
      .then((res) => {
        handleLogin(data);
        setRegistrationError("");
      })
      .catch((error) => {
        setRegistrationError(error);
      });
  }

  // лайк карточке или удаление лайка
  function handleLikeMovie(data, isLiked) {
    if (isLiked) {
      const savedFilm = savedFilms.find(
        (film) => film.movieId === data.id || film.movieId === data.movieId
      );
      mainapi
        .removeLike(savedFilm._id)
        .then((res) => {
          setSavedFilms((films) =>
            films.filter((film) => {
              return film._id !== res._id;
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      mainapi
        .addLike(data)
        .then((res) => {
          setSavedFilms([...savedFilms, res]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  //авторизация аккаунта
  function handleLogin(data) {
    mainapi
      .handleLogin(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setIsLogged(true);
          navigate("/movies");
        }
      })
      .catch((error) => {
        setAuthenticationError(error);
      });
  }

  function handleSignOut() {
    localStorage.clear();
    setIsLogged(false);
    setCurrentUser(null);
    navigate("/");
  }

  // поиск фильмов
  async function handleSearchFilms(data) {
    setIsPreloaderLoading(true);
    localStorage.setItem("filmToSearch", data.filmName);
    localStorage.setItem("shortChecked", isShortFilmsChecked);

    try {
      if (!localStorage.getItem("allFilms")) {
        const films = await moviesapi.getFilms();
        localStorage.setItem("allFilms", JSON.stringify(films));
      }

      const allFilms = JSON.parse(localStorage.getItem("allFilms"));
      const filteredFilms = allFilms.filter(
        (film) =>
          (film.nameRU.toLowerCase().includes(data.filmName.toLowerCase()) ||
            film.nameEN.toLowerCase().includes(data.filmName.toLowerCase())) &
          (isShortFilmsChecked ? film.duration < 40 : true)
      );

      setFilteredFilms(filteredFilms);
      localStorage.setItem("foundFilms", JSON.stringify(filteredFilms));
      setIsPreloaderLoading(false);
    } catch (error) {
      setIsErrorOnLoadingFilms(true);
    }
  }

  function handleSearchSavedFilms(data) {
    const filteredFilms = savedFilms.filter(
      (film) =>
        (film.nameRU.toLowerCase().includes(data.filmName.toLowerCase()) ||
          film.nameEN.toLowerCase().includes(data.filmName.toLowerCase())) &&
        (isShortSavedFilmsChecked ? film.duration < 40 : true)
    );
    setFilteredSavedFilms(filteredFilms);
  }

  // при открытии страницы проверяется есть ли токен, если да, то получает информацию о пользователе,
  // а также сохраненные карточки, прошлый последний запрос
  useEffect(() => {
    if (localStorage.getItem("shortChecked")) {
      setIsShortFilmsShecked(JSON.parse(localStorage.getItem("shortChecked")));
    }
    const foundItems = JSON.parse(localStorage.getItem("foundFilms"));
    if (foundItems) {
      setFilteredFilms(foundItems);
    }

    const jwt = localStorage.getItem("token");
    if (jwt) {
      mainapi
        .checkToken()
        .then(() => {
          setIsLogged(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  // установка пользователя при авторизации и сохранненых карточек
  useEffect(() => {
    if (isLogged) {
      mainapi
        .getUserInformation()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((error) => {
          console.log(error);
        });

      mainapi
        .getSavedMovies()
        .then((data) => {
          setSavedFilms(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLogged]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {pathsOfHeader.includes(pathname) ? <Header isLogged={isLogged} /> : ""}
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isShortFilmsChecked={isShortFilmsChecked}
                handleShortFilms={handleShortFilmsChecked}
                onSearchFilms={handleSearchFilms}
                filteredFilms={filteredFilms}
                savedFilms={savedFilms}
                isPreloaderLoading={isPreloaderLoading}
                isErrorOnLoadingFilms={isErrorOnLoadingFilms}
                handleLikeMovie={handleLikeMovie}
                isLogged={isLogged}
              />
            }
          ></Route>
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute
                isLogged={isLogged}
                element={SavedMovies}
                savedFilms={savedFilms}
                onSearchFilms={handleSearchSavedFilms}
                handleLikeMovie={handleLikeMovie}
                isShortSavedFilmsChecked={isShortSavedFilmsChecked}
                handleShortFilms={handleShortFilmsChecked}
                filteredSavedFilms={filteredSavedFilms}
              />
            }
          ></Route>
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLogged={isLogged}
                onEditProfile={handleEditAccountInformation}
                onSignOut={handleSignOut}
                message={editProfileMessage}
              />
            }
          ></Route>
          <Route
            exact
            path="/signin"
            element={
              <Login
                handleLogin={handleLogin}
                authentificationError={authentificationError}
              />
            }
          ></Route>
          <Route
            exact
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                registrationError={registrationError}
              />
            }
          ></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
