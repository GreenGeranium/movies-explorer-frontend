import "./AuthForm.scss";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../LogoIcon/LogoIcon";

function AuthForm(props) {
  const { pathname } = useLocation();

  return (
    <div className="authform">
      <LogoIcon></LogoIcon>
      <h2 className="authform__title">{props.title}</h2>
      <form
        className="authform__form"
        method="get"
        name={props.formName}
        id={props.formName}
        onSubmit={(evt) => {
          evt.preventDefault();
          props.handleSubmit();
        }}
      >
        {props.children}
        <p className="authform__server-error">
          {props.errorMessage.errorMessage}
        </p>
        <button
          disabled={!props.isFormValid || props.isFormSubmitting}
          className={`authform__button ${
            pathname === "/signup" ? "authform__button_type_register" : ""
          } ${
            props.isFormValid && !props.isFormSubmitting
              ? "authform__button_type_valid"
              : ""
          }`}
        >
          {props.isFormSubmitting
            ? "Отправляется..."
            : pathname === "/signin"
            ? "Войти"
            : "Зарегистрироваться"}
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
