class MoviesApi {
  //обработка запроса
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получение всех фильмов
  getFilms() {
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }).then(this._getResponseData);
  }
}

const moviesapi = new MoviesApi();

export default moviesapi;
