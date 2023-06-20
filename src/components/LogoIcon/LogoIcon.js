import React from "react";
import "./LogoIcon.scss";
import { Link } from "react-router-dom";
import logo from "../../images/logomain.svg";

function LogoIcon() {
  return (
    <Link to="/" className="text-link">
      <img src={logo} alt="Логотип Учебного проекта" />
    </Link>
  );
}

export default LogoIcon;
