import "./Header.scss";
import accounticon from "../../images/accounticon.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoIcon from "../LogoIcon/LogoIcon";
import { useState } from "react";

function Header(props) {
  //открытие и закрытие бургера
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {props.isLogged ? (
        <header className={`header ${pathname === "/" && "header_type_main"}`}>
          <LogoIcon></LogoIcon>
          <div className="links links_type_movies">
            <NavLink to="/movies" className="links__movie">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="links__movie">
              Сохраненные фильмы
            </NavLink>
          </div>
          <div className={isBurgerOpen ? "header__overlay" : ""}></div>
          <Link className="text-link" to="/profile">
            <button className="account">
              <img src={accounticon} alt="Иконка аккаунта" />
              Аккаунт
            </button>
          </Link>
          <div
            className={`header__navigation ${
              isBurgerOpen ? "header__navigation_active" : ""
            }`}
          >
            <div className="links links_position_navigation">
              <NavLink to="/" className="links__movie">
                Главная
              </NavLink>
              <NavLink to="/movies" className="links__movie">
                Фильмы
              </NavLink>
              <NavLink to="/saved-movies" className="links__movie">
                Сохраненные фильмы
              </NavLink>
            </div>
            <Link className="text-link" to="/profile">
              <button className="account account_type_burger">
                <img src={accounticon} alt="Иконка аккаунта" />
                Аккаунт
              </button>
            </Link>
          </div>
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
      ) : (
        <header className={`header ${pathname === "/" && "header_type_main"}`}>
          <LogoIcon></LogoIcon>
          <div className="links">
            <Link to="/signup" className="links__register">
              Регистрация
            </Link>
            <Link to="/signin">
              <button className="links__login">Войти</button>
            </Link>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
