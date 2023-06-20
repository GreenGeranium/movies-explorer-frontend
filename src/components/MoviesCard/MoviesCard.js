import "./MoviesCard.scss";
import { useLocation } from "react-router-dom";
import picture from "../../images/filmpic.png";
import { useState } from "react";

function MoviesCard() {
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
      <img className="card__image" src={picture} />
      <div className="card__description">
        <h4 className="card__name">33 слова о дизайне</h4>
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
        <p className="card__length">1ч 47м</p>
      </div>
    </article>
  );
}

export default MoviesCard;
