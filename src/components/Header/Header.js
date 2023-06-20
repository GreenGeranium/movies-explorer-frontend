import "./Header.scss";
import accounticon from "../../images/accounticon.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoIcon from "../LogoIcon/LogoIcon";
import { useState } from "react";

function Header() {
  //открытие и закрытие бургера
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {(pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile") && (
        <header className="header header_type_movies">
          <LogoIcon></LogoIcon>
          <div className="buttons buttons_type_movies">
            <NavLink to="/movies" className="buttons__movie">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="buttons__movie">
              Сохраненные фильмы
            </NavLink>
          </div>
          <div className={isBurgerOpen ? "header__overlay" : ""}></div>
          <div
            className={`header__navigation ${
              isBurgerOpen ? "header__navigation_active" : ""
            }`}
          >
            <NavLink to="/" className="buttons__movie">
              Главная
            </NavLink>
            <NavLink to="/movies" className="buttons__movie">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="buttons__movie">
              Сохраненные фильмы
            </NavLink>
            <Link className="text-link buttons__account" to="/profile">
              <button className="account account_type_burger">
                <img src={accounticon} />
                Аккаунт
              </button>
            </Link>
          </div>
          <Link className="text-link" to="/profile">
            <button className="account">
              <img src={accounticon} />
              Аккаунт
            </button>
          </Link>
          <div
            className={`header__burger ${
              isBurgerOpen ? "header__burger_active" : ""
            }`}
            onClick={() => {
              setIsBurgerOpen(!isBurgerOpen);
            }}
          >
            <div className="header__supplement"></div>
          </div>
        </header>
      )}
      {pathname === "/" && (
        <header className="header">
          <LogoIcon></LogoIcon>
          <div className="buttons">
            <Link to="/signup" className="buttons__register">
              Регистрация
            </Link>
            <Link to="/signin">
              <button className="buttons__login">Войти</button>
            </Link>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
