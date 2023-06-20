import "./AuthForm.scss";
import logo from "../../images/logomain.svg";
import { Link, useLocation } from "react-router-dom";

function AuthForm(props) {
  const { pathname } = useLocation();

  return (
    <div className="authform">
      <img src={logo} alt="Логотип" className="authform__image" />
      <h2 className="authform__title">{props.title}</h2>
      <form
        className="authform__form"
        method="get"
        name={props.formName}
        id={props.formName}
      >
        {props.children}
        <button className="authform__button">
          {pathname === "/signin" ? "Войти" : "Регистрация"}
        </button>
        <p className="authform__redirect">
          {pathname === "/signin"
            ? "Ещё не зарегистрированы?"
            : "Уже зарегистрированы?"}
          <Link
            className="text-link authform__link"
            to={`${pathname === "/signin" ? "/signup" : "/signin"}`}
          >
            {pathname === "/signin" ? " Регистрация" : " Войти"}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default AuthForm;
