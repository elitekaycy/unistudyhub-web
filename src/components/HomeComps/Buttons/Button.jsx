import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ title, cName, iconName, type, fnx }) => {
  return (
    <button className={cName} type={type} onClick={fnx}>
      {title}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={iconName}
        style={{ marginLeft: "20px" }}
      />
    </button>
  );
};

export default Button;
