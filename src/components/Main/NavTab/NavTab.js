import "./NavTab.scss";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <ul className="navbar">
      <li className="navbar__link">
        <Link className="text-link" to="#aboutproject">
          О проекте
        </Link>
      </li>
      <li className="navbar__link">
        <Link className="text-link" to="/#techs">
          Технологии
        </Link>
      </li>
      <li className="navbar__link">
        <Link className="text-link">Студент</Link>
      </li>
    </ul>
  );
}

export default NavTab;
