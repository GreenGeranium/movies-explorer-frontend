import "./NavTab.scss";
import { Link } from "react-router-dom";

function NavTab(props) {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ul className="navbar">
      <li className="navbar__link">
        <Link
          className="text-link"
          to="/#aboutproject"
          onClick={() => {
            handleScroll(props.projectRef.current);
          }}
        >
          О проекте
        </Link>
      </li>
      <li className="navbar__link">
        <Link
          className="text-link"
          to="/#techs"
          onClick={() => {
            handleScroll(props.techsRef.current);
          }}
        >
          Технологии
        </Link>
      </li>
      <li className="navbar__link">
        <Link
          className="text-link"
          onClick={() => {
            handleScroll(props.meRef.current);
          }}
        >
          Студент
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
