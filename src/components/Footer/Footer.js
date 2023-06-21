import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__content">
        <p className="footer__date">&#169; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a
              className="text-link"
              target="_blank"
              rel="noreferrer"
              href={"//practicum.yandex.ru/"}
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link">
            <a
              className="text-link"
              target="_blank"
              rel="noreferrer"
              href={"//github.com/GreenGeranium"}
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
