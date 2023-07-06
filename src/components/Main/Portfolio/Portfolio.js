import "./Portfolio.scss";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a
            className="text-link"
            target="_blank"
            rel="noreferrer"
            href={"//greengeranium.github.io/how-to-learn/"}
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__link">
          <a
            className="text-link"
            target="_blank"
            rel="noreferrer"
            href={"//greengeranium.github.io/russian-travel/"}
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__link">
          <Link
            className="text-link"
            target="_blank"
            rel="noreferrer"
            to={"//react-mesto-auth-lemon.vercel.app/#/sign-in"}
          >
            Одностраничное приложение
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
