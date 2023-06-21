import AuthForm from "../AuthForm/AuthForm";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <AuthForm
      title="Рады видеть!"
      formName="login-form"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <label className="authform__label">
        <span className="authform__placeholder">E-mail</span>
        <input
          {...register("email", {
            required: "Поле обязательно",
            pattern: {
              value: /\w+@\w+\.\w+/gi,
              message: "Неверный формат email",
            },
            minLength: {
              value: 8,
              message: "Минимальная длина - 8 символов",
            },
          })}
          type="text"
          className={`authform__input ${
            errors.email && "authform__input_type_error"
          }`}
          id="email-input"
          placeholder="Введите email"
        />
        {errors.email && (
          <span className="authform__error">{errors.email.message}</span>
        )}
      </label>
      <label className="authform__label">
        <span className="authform__placeholder">Пароль</span>
        <input
          {...register("password", {
            required: "Поле обязательно",
            minLength: {
              value: 8,
              message: "Минимальная длина - 4 символов",
            },
          })}
          type="password"
          className={`authform__input ${
            errors.password && "authform__input_type_error"
          }`}
          id="password-input"
          placeholder="Введите пароль"
        />
        {errors.password && (
          <span className="authform__error">{errors.password.message}</span>
        )}
      </label>
    </AuthForm>
  );
}

export default Login;
