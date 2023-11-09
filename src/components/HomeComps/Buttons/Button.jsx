import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ title, cName, iconName, type }) => {
  return (
    <button
      className={`${cName} font-header font-semibold text-md`}
      type={type}
      // onClick={fnx}
    >
      {title}
      <FontAwesomeIcon
        icon={faArrowRight}
        className={`${iconName} pl-5 text-md`}
        style={{ marginLeft: "20px" }}
      />
    </button>
  );
};

export default Button;
