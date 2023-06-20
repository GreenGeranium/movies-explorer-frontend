import "./SearchForm.scss";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form
      className="searchform"
      method="get"
      name="search-form"
      id="search-form"
    >
      <input
        type="text"
        className="searchform__input"
        placeholder="Фильм"
        name="search-field"
        id="search-field"
      />
      <label className="searchform__shortfilms">
        <FilterCheckbox></FilterCheckbox>
        <span className="filtercheckbox__name">Короткометражки</span>
      </label>
      <button className="searchform__button"></button>
    </form>
  );
}

export default SearchForm;
