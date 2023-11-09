import React from "react";
import "./Mission.css";

function Mission() {
  return (
    <div className="mission-container py-20 px-20">
      <div className="container-mission backdrop-blur-sm rounded-lg bg-white bg-opacity-20 p-5">
        <div className="mission-title font-header">
          <h2 className="mission-header">MISSION</h2>
          <span className="mission-span"></span>
        </div>

        <p className="mission-description font-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
};

export default Mission;
