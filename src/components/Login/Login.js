import AuthForm from "../AuthForm/AuthForm";
import useFormValidation from "../../hooks/ValidationHook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { values, handleChange, isValid, errors, setIsValid } =
    useFormValidation();

  const navigate = useNavigate();

  useEffect(() => {
    setIsValid(false);
  }, []);

  //в случае если профиль
  useEffect(() => {
    props.isLogged && navigate("/movies");
  }, [props.isLogged]);

  return (
    <AuthForm
      title="Рады видеть!"
      formName="login-form"
      isFormValid={isValid}
      handleSubmit={() => {
        props.handleLogin(values);
      }}
      errorMessage={props.authentificationError}
      isFormSubmitting={props.isFormSubmitting}
    >
      <label className="authform__label">
        <span className="authform__placeholder">E-mail</span>
        <input
          onChange={handleChange}
          required={true}
          type="email"
          className={`authform__input ${
            errors.email && "authform__input_type_error"
          }`}
          id="email"
          name="email"
          placeholder="Введите email"
          value={values.email || ""}
          disabled={props.isFormSubmitting}
        />
        {errors.email && (
          <span className="authform__error">{errors.email}</span>
        )}
      </label>
      <label className="authform__label">
        <span className="authform__placeholder">Пароль</span>
        <input
          type="password"
          required={true}
          onChange={handleChange}
          className={`authform__input ${
            errors.password && "authform__input_type_error"
          }`}
          name="password"
          id="password"
          placeholder="Введите пароль"
          value={values.password || ""}
          disabled={props.isFormSubmitting}
        />
        {errors.password && (
          <span className="authform__error">{errors.password}</span>
        )}
      </label>
    </AuthForm>
  );
}

export default Login;
