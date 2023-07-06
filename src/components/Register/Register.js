import AuthForm from "../AuthForm/AuthForm";
import useFormValidation from "../../hooks/ValidationHook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
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
      title="Добро пожаловать!"
      handleSubmit={() => {
        props.handleRegister(values);
      }}
      isFormValid={isValid}
      errorMessage={props.registrationError}
      isFormSubmitting={props.isFormSubmitting}
    >
      <label className="authform__label">
        <span className="authform__placeholder">Имя</span>
        <input
          onChange={handleChange}
          required={true}
          minLength={2}
          maxLength={30}
          type="text"
          className={`authform__input ${
            errors.name && "authform__input_type_error"
          }`}
          id="name"
          name="name"
          value={values.name || ""}
        />
        {errors.name && <span className="authform__error">{errors.name}</span>}
      </label>
      <label className="authform__label">
        <span className="authform__placeholder">E-mail</span>
        <input
          required={true}
          onChange={handleChange}
          type="email"
          className={`authform__input ${
            errors.email && "authform__input_type_error"
          }`}
          id="email"
          name="email"
          value={values.email || ""}
        />
        {errors.email && (
          <span className="authform__error">{errors.email}</span>
        )}
      </label>
      <label className="authform__label">
        <span className="authform__placeholder">Пароль</span>
        <input
          required={true}
          onChange={handleChange}
          type="password"
          className={`authform__input ${
            errors.password && "authform__input_type_error"
          }`}
          id="password"
          name="password"
          value={values.password || ""}
        />
        {errors.password && (
          <span className="authform__error">{errors.password}</span>
        )}
      </label>
    </AuthForm>
  );
}

export default Register;
