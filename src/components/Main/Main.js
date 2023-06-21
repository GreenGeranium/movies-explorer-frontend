import "./Main.scss";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import { useRef } from "react";
function Main() {
  const projectRef = useRef();
  const techsRef = useRef();
  const meRef = useRef();

  return (
    <main className="main">
      <Promo></Promo>
      <NavTab
        projectRef={projectRef}
        techsRef={techsRef}
        meRef={meRef}
      ></NavTab>
      <AboutProject projectRef={projectRef}></AboutProject>
      <Techs techsRef={techsRef}></Techs>
      <AboutMe meRef={meRef}></AboutMe>
      <Portfolio></Portfolio>
    </main>
  );
}

export default Main;
