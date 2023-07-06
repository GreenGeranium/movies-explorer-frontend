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
import { MAIN_API } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";
import useMovies from "../../hooks/MoviesHook";
import useSavedMovies from "../../hooks/SavedMoviesHook";

function App() {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const pathsOfHeader = ["/", "/movies", "/saved-movies", "/profile"];
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const [authentificationError, setAuthenticationError] = useState("");
  const [editProfileMessage, setEditProfileMessage] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const mainapi = new MainApi({
    baseUrl: MAIN_API,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  const {
    savedMovies,
    handleSetShortSavedMovies,
    handleSetSearchSavedField,
    handleLikeMovie,
    areSavedFilmsNotFound,
  } = useSavedMovies(mainapi);

  const {
    handleSetShortMovies,
    handleSetSearchField,
    movies,
    areMoviesLoading,
    errorFilms,
    areFilmsNotFound,
  } = useMovies(moviesapi.getFilms());

  // регистрация аккаунта
  function handleRegister(data) {
    setIsFormSubmitting(true);
    mainapi
      .handleRegister(data)
      .then(() => {
        handleLogin(data);
        setRegistrationError("");
      })
      .catch((error) => {
        setRegistrationError(error);
        setIsFormSubmitting(false);
      });
  }

  //авторизация аккаунта
  function handleLogin(data) {
    setIsFormSubmitting(true);
    mainapi
      .handleLogin(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setIsLogged(true);
          navigate("/movies");
          setIsFormSubmitting(false);
        }
      })
      .catch((error) => {
        setIsFormSubmitting(false);
        setAuthenticationError(error);
      });
  }

  // редактирование пользователя
  function handleEditAccountInformation(data) {
    setIsFormSubmitting(true);
    mainapi
      .editProfile(data)
      .then((res) => {
        setCurrentUser(res);
        setEditProfileMessage("Профиль успешно изменен");
      })
      .catch((error) => {
        setEditProfileMessage(error);
      })
      .finally(() => {
        setIsFormSubmitting(false);
      });
  }

  // выход из аккаунта
  function handleSignOut() {
    localStorage.clear();
    setIsLogged(false);
    setCurrentUser(null);
    navigate("/");
  }

  // при открытии страницы проверяется есть ли токен, если да, то получает информацию о пользователе,
  // а также сохраненные карточки, прошлый последний запрос
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      setIsPageLoading(true);
      mainapi
        .checkToken()
        .then((res) => {
          if (res) {
            setIsLogged(true);
            navigate(location.pathname);
          }
        })
        .catch((error) => {
          console.log(error);
          navigate("/signin");
        })
        .finally(() => {
          setIsPageLoading(false);
        });
    } else {
      setIsPageLoading(false);
    }
  }, []);

  // установка пользователя при авторизации и сохраненных карточках
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
    }
  }, [isLogged]);

  return (
    <div className="page">
      {isPageLoading ? (
        <Preloader isPreloaderLoading={isPageLoading} position="main" />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          {pathsOfHeader.includes(pathname) ? (
            <Header isLogged={isLogged} />
          ) : (
            ""
          )}
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route
              exact
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  handleShortFilms={handleSetShortMovies}
                  onSearchFilms={handleSetSearchField}
                  filteredFilms={movies}
                  savedFilms={savedMovies}
                  isPreloaderLoading={areMoviesLoading}
                  isErrorOnLoadingFilms={errorFilms}
                  handleLikeMovie={handleLikeMovie}
                  isLogged={isLogged}
                  areFilmsNotFound={areFilmsNotFound}
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
                  handleLikeMovie={handleLikeMovie}
                  savedFilms={savedMovies}
                  onSearchFilms={handleSetSearchSavedField}
                  handleShortFilms={handleSetShortSavedMovies}
                  areFilmsNotFound={areSavedFilmsNotFound}
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
                  isFormSubmitting={isFormSubmitting}
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
                  isLogged={isLogged}
                  isFormSubmitting={isFormSubmitting}
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
                  isLogged={isLogged}
                  isFormSubmitting={isFormSubmitting}
                />
              }
            ></Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer></Footer>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
