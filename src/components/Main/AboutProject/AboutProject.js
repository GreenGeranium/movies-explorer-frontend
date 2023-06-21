import "./AboutProject.scss";

function AboutProject(props) {
  return (
    <section className="aboutproject" id="aboutproject" ref={props.projectRef}>
      <h2 className="aboutproject__title">О проекте</h2>
      <div className="aboutproject__description">
        <div className="steps">
          <h3 className="steps__title">Дипломный проект включал 5 этапов</h3>
          <p className="steps__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="steps">
          <h3 className="steps__title">На выполнение диплома ушло 5 недель</h3>
          <p className="steps__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutproject__table">
        <div className="table__line">
          <p className="table__text table__text_color_green">1 неделя</p>
          <p className="table__text">4 недели</p>
        </div>
        <div className="table__subtitles">
          <p className="table__programming">Back-end</p>
          <p className="table__programming">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
