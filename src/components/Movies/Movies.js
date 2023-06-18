import "./Movies.scss";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";

function Movies() {
  useEffect(() => {
    window.onload = () => {
      const preloader = document.querySelector(".preloader");
      preloader.remove();
    };
  });

  return (
    <div className="movies">
      <SearchForm></SearchForm>
      <Preloader></Preloader>

      {/*
      <MoviesCardList></MoviesCardList>
      <MoviesCard></MoviesCard>*/}
    </div>
  );
}

export default Movies;
