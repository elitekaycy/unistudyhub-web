import React from "react";
import Button from "../Buttons/Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

function Navbar(){
  return (
    <nav className="fixed top-0 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm w-full px-20 py-2 z-20">
      <div className="nav-container">
        <div className="logo font-header text-3xl font-bold">UniStudy</div>
        <ul className="link-items font-header">
          <div className="active-link">
            <li>
              <a href="#about" id="active">
                Home
              </a>
            </li>
            <span className="link-span"></span>
          </div>
          {/* <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "not-active"
              }
            >
              try
            </NavLink>
          </li> */}
          <li className="not-active">
            <a href="#services">About Us</a>
          </li>
          <li className="not-active">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="not-active">
            <a href="#contact">Enrolment</a>
          </li>
        </ul>
        <div className="buttons font-header">
          <Link to="/login">
            <Button
              title={"Sign Up"}
              cName={"primary-button"}
              iconName={"icon-display"}
            ></Button>
          </Link>
          {/* <Button
            title={"Donate"}
            cName={"secondary-button"}
            iconName={"icon-display"}
          ></Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
