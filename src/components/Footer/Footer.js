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
          <li className="footer__link">Яндекс.Практикум</li>
          <li className="footer__link">Github</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
