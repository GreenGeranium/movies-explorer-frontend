import "./FilterChekbox.scss";

function FilterCheckbox(props) {
  return (
    <label className="filtercheckbox">
      <input
        type="checkbox"
        className="filtercheckbox__checkbox"
        name="shortChecked"
        id="shortChecked"
        onChange={props.handleChange}
        checked={props.isShortFilmsChecked}
      />
      <span className="filtercheckbox__slider"></span>
    </label>
  );
}

export default FilterCheckbox;
