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

function App() {
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const pathsOfHeader = ["/", "/movies", "/saved-movies", "/profile"];

  useEffect(() => {
    window.onload = () => {
      const preloader = document.querySelector(".preloader");
      preloader.remove();
    };
  });

  return (
    <div className="page">
      {pathsOfHeader.includes(pathname) ? <Header /> : ""}
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/movies" element={<Movies />}></Route>
        <Route exact path="/saved-movies" element={<SavedMovies />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/signin" element={<Login />}></Route>
        <Route exact path="/signup" element={<Register />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
      <Preloader></Preloader>
    </div>
  );
}

export default App;
