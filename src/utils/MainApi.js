class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //обработка запроса
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return res.json().then((data) => {
      console.log(data);
      return Promise.reject({
        statusCode: res.status,
        errorMessage:
          data.message === "Validation failed"
            ? "Что-то не так с введенными данными"
            : data.message,
      });
    });
  }

  // получение сохраненных фильмов
  async getSavedMovies() {
    return await fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._getResponseData);
  }

  // получить информацию о пользователе
  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._getResponseData);
  }

  //изменить информацию о профиле
  editProfile({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._getResponseData);
  }

  //удалить лайк
  removeLike(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getResponseData);
  }

  // поставить лайк на фильме
  addLike(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: "https://api.nomoreparties.co" + data.image.url,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail:
          "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
        movieId: data.id,
      }),
    }).then(this._getResponseData);
  }

  //регистрация пользователя
  handleRegister({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._getResponseData);
  }

  // проверка токена
  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._getResponseData);
  }

  // авторизация пользователя
  handleLogin({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._getResponseData);
  }
}

export default MainApi;
