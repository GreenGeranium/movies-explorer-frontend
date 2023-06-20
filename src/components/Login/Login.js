import "./Login.scss";
import AuthForm from "../AuthForm/AuthForm";

function Login(props) {
  return (
    <AuthForm title="Рады видеть!" formName="login-form">
      <label className="authform__label">
        <span className="authform__placeholder">E-mail</span>
        <input type="text" className="authform__input" id="email-input" />
      </label>
      <label className="authform__label">
        <span className="authform__placeholder">Пароль</span>
        <input type="password" className="authform__input" id="email-input" />
      </label>
    </AuthForm>
  );
}

export default Login;
