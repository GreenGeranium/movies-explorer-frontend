import "./Header.scss";
import logo from "../../images/logomain.svg";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  console.log(pathname);

  if (pathname === "/") {
    return (
      <header className="header">
        <Link to="/">
          <img src={logo} alt="Логотип Учебного проекта" />
        </Link>
        <div className="buttons">
          <Link to="/signup" className="buttons__register">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="buttons__login">Войти</button>
          </Link>
        </div>
      </header>
    );
  } else if (
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile"
  ) {
    return (
      <header className="header header_type_movies">
        <Link to="/">
          <img src={logo} alt="Логотип Учебного проекта" />
        </Link>
        <div className="buttons buttons_type_movies">
          <NavLink to="/movies" className="buttons__movie">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="buttons__movie">
            Сохраненные фильмы
          </NavLink>
        </div>

        <Link to="/profile">
          <button> </button>
        </Link>
      </header>
    );
  }
}

export default Header;
