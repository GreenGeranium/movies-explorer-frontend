import "./FilterChekbox.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function FilterCheckbox(props) {
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-movies";

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (!isSavedPage) {
      setIsChecked(JSON.parse(localStorage.getItem("shortChecked")));
    }
  }, [isSavedPage]);

  return (
    <label className="filtercheckbox">
      <input
        type="checkbox"
        className="filtercheckbox__checkbox"
        name="shortChecked"
        id="shortChecked"
        onChange={(event) => {
          props.handleChange(event);
          setIsChecked(event.target.checked);
        }}
        checked={isChecked}
      />
      <span className="filtercheckbox__slider"></span>
    </label>
  );
}

export default FilterCheckbox;
