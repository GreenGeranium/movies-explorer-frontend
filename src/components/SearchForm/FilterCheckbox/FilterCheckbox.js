import "./FilterChekbox.scss";
import { useLocation } from "react-router-dom";

function FilterCheckbox(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-movies";

  return (
    <label className="filtercheckbox">
      <input
        type="checkbox"
        className="filtercheckbox__checkbox"
        name="shortChecked"
        id="shortChecked"
        onChange={() => {
          props.handleChange();
        }}
        checked={
          isSavedPage
            ? props.isShortSavedFilmsChecked
            : props.isShortFilmsChecked
        }
      />
      <span className="filtercheckbox__slider"></span>
    </label>
  );
}

export default FilterCheckbox;
