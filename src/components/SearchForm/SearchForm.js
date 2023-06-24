import "./SearchForm.scss";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import { useState } from "react";

function SearchForm(props) {
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });

  const [isError, setIsError] = useState(false);

  return (
    <form
      className="searchform"
      method="get"
      name="search-form"
      id="search-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        if (errors.film) {
          return;
        }
        const film = getValues("film");
        props.onSearchFilms(film);
      }}
    >
      <label className="searchform__label">
        <input
          type="text"
          className="searchform__input"
          placeholder="Фильм"
          name="search-field"
          id="search-field"
          {...register("film", {
            required: "Нужно ввести ключевое слово",
          })}
        />
        {errors.film && (
          <span className="searchform__error">{errors.film.message}</span>
        )}
      </label>

      <label className="searchform__shortfilms">
        <FilterCheckbox></FilterCheckbox>
        <span>Короткометражки</span>
      </label>
      <button className="searchform__button"></button>
    </form>
  );
}

export default SearchForm;
