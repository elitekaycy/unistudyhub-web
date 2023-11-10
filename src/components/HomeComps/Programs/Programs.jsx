import React from "react";
import "./Programs.css";
import Button from "../Buttons/Button";
import programsImage from "../../../assets/programsImg.svg";

const Programs = () => {
  const values = [
    {
      icon: "workspaces",
      title: "Collaboration",
      body:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
        "Voluptate qui earum, accusantium sint iure atque voluptatibus " +
        "accusamus nisifacilis voluptatem ex cupiditate magni ab, asperiores optio rationedeserunt natus dolorum?",
    },
    {
      icon: "accessibility_new",
      title: "Accessible Learning Resources",
      body:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
        "Voluptate qui earum, accusantium sint iure atque voluptatibus " +
        "accusamus nisifacilis voluptatem ex cupiditate magni ab, asperiores optio rationedeserunt natus dolorum?",
    },
    {
      icon: "code",
      title: "Skill Enhancement ",
      body:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
        "Voluptate qui earum, accusantium sint iure atque voluptatibus " +
        "accusamus nisifacilis voluptatem ex cupiditate magni ab, asperiores optio rationedeserunt natus dolorum?",
    },
    {
      icon: "update",
      title: "Innovation and Adaptability",
      body:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
        "Voluptate qui earum, accusantium sint iure atque voluptatibus " +
        "accusamus nisifacilis voluptatem ex cupiditate magni ab, asperiores optio rationedeserunt natus dolorum?",
    },
  ];

  const borderColors = [
    "border-b-green-600",
    "border-b-blue-500",
    "border-b-yellow-400",
    "border-b-red-600",
  ];

  return (
    <div className="programs-container bg-[url('./src/assets/bg2.jpg')] bg-cover w-8/12 flex justify-center ">
      <div className="container-programs w-full flex flex-wrap justify-center">
        {values.map((value, index) => (
          <div
            key={index}
            className={`w-2/5 bg-white m-2 p-5 border-b-2 ${borderColors[index]} rounded-md`}
          >
            <span class="material-symbols-outlined">{value.icon}</span>
            <div className="font-header text-2xl font-bold pb-3">
              {value.title}
            </div>
            <p className="font-body font-md font-semibold">{value.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
