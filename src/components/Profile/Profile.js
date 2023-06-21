import "./Profile.scss";

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form
        className="profile__form"
        method="get"
        name="profile-form"
        id="profile-form"
      >
        <label className="profile__label">
          <span className="profile__placeholder">Имя</span>
          <input type="text" className="profile__input" id="name-input" />
        </label>
        <label className="profile__label">
          <span className="profile__placeholder">E-mail</span>
          <input type="text" className="profile__input" id="name-input" />
        </label>

        <button className="profile__edit">Редактировать</button>
        <button className="profile__exit">Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;
