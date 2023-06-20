import AuthForm from "../AuthForm/AuthForm";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <AuthForm title="Добро пожаловать!" handleSubmit={handleSubmit(onSubmit)}>
      <label className="authform__label">
        <span className="authform__placeholder">Имя</span>
        <input
          {...register("name", {
            required: "Поле обязательно",
          })}
          type="text"
          className="authform__input"
          id="name-input"
        />
        {errors.name && (
          <span className="authform__error">{errors.name.message}</span>
        )}
      </label>
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
          className="authform__input"
          id="email-input"
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
          className="authform__input"
          id="password-input"
        />
        {errors.password && (
          <span className="authform__error">{errors.password.message}</span>
        )}
      </label>
    </AuthForm>
  );
}

export default Register;
