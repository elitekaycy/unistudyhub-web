import React, { useState, useEffect } from "react";
import "./Welcome.css";
import welcomeImage from "../../../assets/descriptionImg.svg";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome-container px-10 h-screen flex justify-center items-center ">
      <div className="container-welcome">
        <div className="welcome-text">
          <h1 className="font-header font-bold text-5xl">
            Discover, Collaborate, and Excel with UniStudy. <br />
            Your Knowledge Sharing Hub
          </h1>
          <p className="py-6 font-body">
            - Connecting Minds, Sharing Knowledge - Together, We Grow
          </p>
          <Link to="/login">
            <Button
              title={"Get Started"}
              cName={"get-started"}
              // fnx={login}
            ></Button>
          </Link>
        </div>

        <div className="welcome-img-container">
          <img src={welcomeImage} alt="welcomeImage" className="welcome-img" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
