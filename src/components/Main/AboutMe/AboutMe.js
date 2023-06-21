import "./AboutMe.scss";
import avatar from "../../../images/avatar.svg";

function AboutMe(props) {
  return (
    <section className="aboutme" ref={props.meRef}>
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__content">
        <div className="aboutme__description">
          <h3 className="aboutme__name">Виталий</h3>
          <h4 className="aboutme__profession">Фронтенд-разработчик, 30 лет</h4>
          <p className="aboutme__biography">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="aboutme__github">Github</a>
        </div>
        <img
          src={avatar}
          alt="Фотография студента"
          className="aboutme__avatar"
        />
      </div>
    </section>
  );
}

export default AboutMe;
