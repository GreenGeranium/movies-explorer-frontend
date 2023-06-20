import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {
  useEffect(() => {
    window.onload = () => {
      const preloader = document.querySelector(".preloader");
      preloader.remove();
    };
  });
  return (
    <div className="page">
      <Header></Header>
      <Preloader></Preloader>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
