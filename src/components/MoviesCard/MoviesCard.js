import "./MoviesCard.scss";
import { useLocation } from "react-router-dom";
import picture from "../../images/filmpic.png";
import { useState } from "react";

function MoviesCard(props) {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_active"
  }`;

  function handleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <article className="card">
      <img
        className="card__image"
        alt='Постер фильма "33 слова о дизайне"'
        src={`https://api.nomoreparties.co/${props.data.image.url}`}
      />
      <div className="card__description">
        <h4 className="card__name">{props.data.nameRU}</h4>
        {pathname === "/saved-movies" ? (
          <div className="card__trash"></div>
        ) : (
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Лайк"
            onClick={handleLike}
          ></button>
        )}
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
