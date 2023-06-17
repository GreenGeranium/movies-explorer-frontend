import "./Techs.scss";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__content">
        <h3 className="techs__section-title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__technologies">
          <li className="techs__technology">HTML</li>
          <li className="techs__technology">CSS</li>
          <li className="techs__technology">JS</li>
          <li className="techs__technology">React</li>
          <li className="techs__technology">Git</li>
          <li className="techs__technology">Express.js</li>
          <li className="techs__technology">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
