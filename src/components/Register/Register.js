import AuthForm from "../AuthForm/AuthForm";
import useFormValidation from "../../hooks/ValidationHook";

function Register() {
  const { values, handleChange, isValid, errors } = useFormValidation();

  function onSubmit() {
    console.log(isValid);
  }

  return (
    <AuthForm
      title="Добро пожаловать!"
      handleSubmit={onSubmit}
      isFormValid={isValid}
    >
      <label className="authform__label">
        <span className="authform__placeholder">Имя</span>
        <input
          onChange={(evt) => {
            handleChange(evt);
            /*            console.log(errors);
            console.log(values);*/
          }}
          required={true}
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
          /*pattern:
              value: /\w+@\w+\.\w+/gi,*/

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
          minLength={8}
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
