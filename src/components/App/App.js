import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";

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
        <Route path="/saved-movies"></Route>
        <Route path="/profile"></Route>
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
