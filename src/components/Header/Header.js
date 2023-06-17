import "./Header.scss";
import logo from "../../images/logomain.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Учебного проекта" />
      <div className="buttons">
        <a className="buttons__register">Регистрация</a>
        <button className="buttons__login">Войти</button>
      </div>
    </header>
  );
}

export default Header;
