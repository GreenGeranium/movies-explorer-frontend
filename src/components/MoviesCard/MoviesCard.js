import "./MoviesCard.scss";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const { pathname } = useLocation();

  const isLiked = props.savedFilms.some(
    (film) =>
      film.movieId === props.data.id || film.movieId === props.data.movieId
  );

  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_active"
  }`;

  return (
    <article className="card">
      <a className="card__link" href={props.data.trailerLink} target="_blank">
        <img
          className="card__image"
          alt='Постер фильма "33 слова о дизайне"'
          src={
            pathname === "/saved-movies"
              ? props.data.image
              : `https://api.nomoreparties.co/${props.data.image.url}`
          }
        />
      </a>
      <div className="card__description">
        <h4 className="card__name">{props.data.nameRU}</h4>
        <button
          className={`${
            pathname === "/saved-movies"
              ? "card__trash"
              : cardLikeButtonClassName
          }`}
          type="button"
          aria-label="Лайк"
          onClick={() => {
            props.handleLikeMovie(props.data, isLiked);
          }}
        ></button>
        <p className="card__length">{`${
          Math.floor(props.data.duration / 60) >= 1
            ? Math.floor(props.data.duration / 60) + "ч"
            : ""
        } ${props.data.duration % 60}м`}</p>
      </div>
    </article>
  );
}

export default MoviesCard;
