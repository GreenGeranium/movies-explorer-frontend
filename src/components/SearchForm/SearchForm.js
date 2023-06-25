import "./SearchForm.scss";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import useFormValidation from "../../hooks/ValidationHook";

function SearchForm(props) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  } = useFormValidation();

  /*  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({ mode: "all" });*/

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
        props.onSearchFilms(values);
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
