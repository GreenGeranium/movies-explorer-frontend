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
  await;

  async getFilms() {
    let res = await fetch(MOVIES_API, {
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });
    return this._getResponseData(res);
  }
}

const moviesapi = new MoviesApi();

export default moviesapi;
