import React from "react";
import "./Preloader.css";

const Preloader = (props) => {
  return (
    <div
      className={`preloader ${
        props.isPreloaderLoading ? "preloader_active" : ""
      } ${props.position === "main" ? "preloader_position_main" : ""}`}
    >
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
