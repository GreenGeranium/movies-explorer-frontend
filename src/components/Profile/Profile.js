import "./Profile.scss";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormValidation from "../../hooks/ValidationHook";

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues, setIsValid } =
    useFormValidation();

  //отрисовка значений формы, полученных из контекста с сервера
  useEffect(() => {
    setIsValid(false);
    setValues({
      ...values,
      ["email"]: currentUser.email || "",
      ["name"]: currentUser.name || "",
    });
  }, [currentUser, setValues]);

  return (
    <div className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form
        className="profile__form"
        method="get"
        name="profile-form"
        id="profile-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          if (
            isValid &&
            (currentUser.name !== values.name ||
              currentUser.email !== values.email)
          ) {
            props.onEditProfile(values);
          }
        }}
      >
        <label className="profile__label">
          <span className="profile__placeholder">Имя</span>
          <input
            type="text"
            required={true}
            className="profile__input"
            id="name"
            name="name"
            onChange={handleChange}
            value={values.name || ""}
          />
          {errors.name && <span className="profile__error">{errors.name}</span>}
        </label>
        <label className="profile__label">
          <span className="profile__placeholder">E-mail</span>
          <input
            type="email"
            className="profile__input"
            id="email"
            name="email"
            required={true}
            onChange={handleChange}
            value={values.email || ""}
          />
          {errors.email && (
            <span className="profile__error">{errors.email}</span>
          )}
        </label>
        <p className="profile__server-error">
          {props.message.errorMessage
            ? props.message.errorMessage
            : props.message}
        </p>
        <button
          className={`profile__edit ${isValid && "profile__edit_active"}`}
          type="submit"
          disabled={!isValid}
        >
          Редактировать
        </button>
        <button className="profile__exit" onClick={props.onSignOut}>
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
}

export default Profile;
