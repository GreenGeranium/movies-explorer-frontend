import "./FilterChekbox.scss";

function FilterCheckbox() {
  return (
    <label className="filtercheckbox">
      <input type="checkbox" className="filtercheckbox__checkbox" />
      <span className="filtercheckbox__slider"></span>
    </label>
  );
}

export default FilterCheckbox;
