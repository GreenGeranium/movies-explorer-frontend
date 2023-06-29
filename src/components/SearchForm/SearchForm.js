import "./SearchForm.scss";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import useFormValidation from "../../hooks/ValidationHook";
import { useEffect } from "react";

function SearchForm(props) {
  const { values, handleChange, isValid, setValues, errors } =
    useFormValidation();

  useEffect(() => {
    if (!props.isSavedMovies) {
      const storedFilmToSearch = localStorage.getItem("filmToSearch");
      if (storedFilmToSearch) {
        setValues({
          ...values,
          filmName: storedFilmToSearch,
        });
      }
    }
  }, []);

  return (
    <form
      className="searchform"
      method="get"
      name="search-form"
      id="search-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        if (!isValid) {
          return;
        }
        props.onSearchFilms(values);
      }}
    >
      <label className="searchform__label">
        <input
          type="text"
          className="searchform__input"
          placeholder="Фильм"
          name="filmName"
          id="filmName"
          onChange={handleChange}
          value={values.filmName || ""}
          required={true}
        />
        {errors.filmName && (
          <span className="searchform__error">Нужно ввести ключевое слово</span>
        )}
      </label>

      <label className="searchform__shortfilms">
        <FilterCheckbox
          handleChange={props.handleShortFilms}
          isShortFilmsChecked={props.isShortFilmsChecked}
          isSavedMovies={props.isSavedMovies}
          isShortSavedFilmsChecked={props.isShortSavedFilmsChecked}
        ></FilterCheckbox>
        <span>Короткометражки</span>
      </label>
      <button className="searchform__button"></button>
    </form>
  );
}

export default SearchForm;
