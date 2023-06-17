import "./Portfolio.scss";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">Статичный сайт</li>
        <li className="portfolio__link">Адаптивный сайт</li>
        <li className="portfolio__link">Одностраничное приложение</li>
      </ul>
    </section>
  );
}

export default Portfolio;
