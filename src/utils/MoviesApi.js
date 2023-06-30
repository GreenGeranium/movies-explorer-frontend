import { MOVIES_API } from "./constants";

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
    return fetch(MOVIES_API, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    }).then(this._getResponseData);
  }
}

const moviesapi = new MoviesApi();

export default moviesapi;
