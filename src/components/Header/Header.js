import "./Header.scss";
import accounticon from "../../images/accounticon.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoIcon from "../LogoIcon/LogoIcon";

function Header() {
  const { pathname } = useLocation();

  return (
    <header
      className={`header ${
        (pathname === "/movies" ||
          pathname === "/saved-movies" ||
          pathname === "/profile") &&
        "header_type_movies"
      } ${
        (pathname === "/signin" || pathname === "/signup") &&
        "header_state_hidden"
      }`}
    >
      <LogoIcon></LogoIcon>
      <div
        className={`buttons ${
          (pathname === "/movies" ||
            pathname === "/saved-movies" ||
            pathname === "/profile") &&
          "buttons_type_movies"
        }`}
      >
        {(pathname === "/movies" ||
          pathname === "/saved-movies" ||
          pathname === "/profile") && (
          <>
            <NavLink to="/movies" className="buttons__movie">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="buttons__movie">
              Сохраненные фильмы
            </NavLink>
          </>
        )}
        {pathname === "/" && (
          <>
            <Link to="/signup" className="buttons__register">
              Регистрация
            </Link>
            <Link to="/signin">
              <button className="buttons__login">Войти</button>
            </Link>
          </>
        )}
      </div>

      {(pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile") && (
        <Link className="text-link" to="/profile">
          <button className="account">
            <img src={accounticon} />
            Аккаунт
          </button>
        </Link>
      )}
    </header>
  );
}

export default Header;
