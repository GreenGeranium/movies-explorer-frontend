import "./AboutMe.scss";
import avatar from "../../../images/avatar.jpg";

function AboutMe(props) {
  return (
    <section className="aboutme" ref={props.meRef}>
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__content">
        <div className="aboutme__description">
          <h3 className="aboutme__name">Максим</h3>
          <h4 className="aboutme__profession">Фронтенд-разработчик, 19 лет</h4>
          <p className="aboutme__biography">
            Я родился в городе Владимир, но уже несколько лет живу в Москве.
            Здесь я учусь в НИУ ВШЭ, направление "Лингвистика".
            Программированием я занимаюсь со школы, писал на Python и C#, но JS
            зацепил меня больше всего. В свободное время я изучаю иностранные
            языки, играю на музыкальных инструментах, а также изучаю русский
            фольклор.
          </p>
          <a
            className="aboutme__github"
            target="_blank"
            rel="noreferrer"
            href={"//github.com/GreenGeranium"}
          >
            Github
          </a>
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
