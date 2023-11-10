import React from "react";
import "./Mission.css";

function Mission() {
  return (
    <div className="mission-container py-20 px-20">
      <div className="container-mission backdrop-blur-sm rounded-lg bg-white bg-opacity-20 p-5">
        <div className="mission-title font-header font-xl font-bold">
          <h2 className="mission-header">MISSION</h2>
          <span className="mission-span"></span>
        </div>

        <p className="mission-description font-body text-md">
          We envision a world where everyone has access to the resources they
          need to succeed, regardless of their background or financial
          situation. We believe that sharing knowledge and resources is
          essential for human progress. Our mission is to enable students and
          professionals to share and access high-quality resources, empowering
          them to learn, grow, and succeed. We are committed to creating a
          platform that is easy to use and accessible to everyone. We believe
          that everyone has something valuable to share, and we want to make it
          easy for people to contribute to our community. We also believe that
          it is important to provide users with the tools and features they need
          to find and use resources effectively.
        </p>
      </div>
    </div>
  );
};

export default Mission;
