import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import moviesapi from "../../utils/MoviesApi";

function App() {
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const pathsOfHeader = ["/", "/movies", "/saved-movies", "/profile"];
  // TODO ДОБАВИТЬ ПОЛУЧЕНИЕ ИЗ LOCAL STORAGE
  const [allFilms, setAllFilms] = useState([]);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [isPreloaderLoading, setIsPreloaderLoading] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("allFilms"));
    if (items) {
      setAllFilms(items);
    }
  }, []);

  //поиск фильмов
  async function handleSearchFilms(filmToSearch) {
    setIsPreloaderLoading(true);
    localStorage.setItem("filmToSearch", filmToSearch);

    try {
      if (!localStorage.getItem("allFilms")) {
        const films = await moviesapi.getFilms();
        setAllFilms(films);
        localStorage.setItem("allFilms", JSON.stringify(films));
      }

      const allFilms = JSON.parse(localStorage.getItem("allFilms"));
      const filteredFilms = allFilms.filter(
        (film) =>
          film.nameRU.toLowerCase().includes(filmToSearch.toLowerCase()) ||
          film.nameEN.toLowerCase().includes(filmToSearch.toLowerCase())
      );

      setFilteredFilms(filteredFilms);
      setIsPreloaderLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="page">
      {pathsOfHeader.includes(pathname) ? <Header /> : ""}
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route
          exact
          path="/movies"
          element={
            <Movies
              onSearchFilms={handleSearchFilms}
              filteredFilms={filteredFilms}
              isPreloaderLoading={isPreloaderLoading}
            />
          }
        ></Route>
        <Route exact path="/saved-movies" element={<SavedMovies />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/signin" element={<Login />}></Route>
        <Route exact path="/signup" element={<Register />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
