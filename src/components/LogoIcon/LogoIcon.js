import React from "react";
import "./LogoIcon.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logomain.svg";

function LogoIcon() {
  return (
    <Link to="/" className="text-link logo-icon">
      <img
        src={logo}
        alt="Логотип Учебного проекта"
        className="logo-icon__icon"
      />
    </Link>
  );
}

export default LogoIcon;
