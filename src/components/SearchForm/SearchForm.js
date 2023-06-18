import "./SearchForm.scss";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="searchform">
      <input type="text" className="searchform__input" placeholder="Фильм" />
      <label className="searchform__shortfilms">
        <FilterCheckbox></FilterCheckbox>
        <span className="filtercheckbox__name">Короткометражки</span>
      </label>
      <button className="searchform__button"></button>
    </form>
  );
}

export default SearchForm;
