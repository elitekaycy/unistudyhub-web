import React, { useState, useEffect } from "react";
import "./Welcome.css";
import welcomeImage from "../../assets/descriptionImg.svg";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [token, setToken] = useState("");

  const login = async () => {
    try {
      const response = await fetch(
        "https://trackwise-api-production.up.railway.app/auth/login/?status=lecturer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "108419419",
            password: "krypton5424",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token; // Get the token from the response data
        console.log("hi");
        setToken(token); // Set the token using the state setter
        localStorage.setItem("authToken", token);
        console.log(token);
      } else {
        console.error("Login failed. Response status:", response.status);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const [data, setData] = useState([]);

  // const [data, setData] = React.useState([]);
  const fetchSessions = async () => {
    try {
      const tempToken = await localStorage.getItem("authToken");
      const response = await fetch(
        "https://trackwise-api-production.up.railway.app/sessions/",
        {
          headers: {
            Authorization: `Token ${tempToken}`,
          },
        }
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
    console.log(data);
  }, [data]);

  // useEffect(() => {
  //   console.log(data); // Log data when it changes
  // }, [data]);
  return (
    <div className="welcome-container">
      <div className="container-welcome">
        <div className="welcome-text">
          <h1>
            Ghana’s #1 Basic <br />
            School with top notch educational Facilities
          </h1>
          <p>
            Enroll your children into the hands of well <br />
            trained professional tutors in Ghana
          </p>
          <Link to="/login">
            <Button
              title={"Get Started"}
              cName={"get-started"}
              fnx={login}
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
