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
        "Foster a collaborative environment where students and professionals come together to share knowledge, resources, and experiences." +
        "Build a supportive community that encourages learning and growth through shared resources and expertise.",
    },
    {
      icon: "accessibility_new",
      title: "Accessible Learning Resources",
      body:
        "Ensure easy access to a diverse range of learning materials, making education and professional development accessible to all." +
        "Empower users with a vast library of resources, from study guides to industry insights, enhancing their learning journeys.",
    },
    {
      icon: "code",
      title: "Skill Enhancement ",
      body:
        "Facilitate skill development by connecting users with relevant resources and opportunities for hands-on learning." +
        "Promote networking within the platform, allowing users to connect with like-minded individuals, mentors, and potential collaborators.",
    },
    {
      icon: "update",
      title: "Innovation and Adaptability",
      body:
        "Embrace innovation by staying current with the latest technologies and trends in education and professional fields." +
        "Adapt to the evolving needs of our users, providing cutting-edge features and resources that align with the ever-changing landscape of learning and work.",
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
            className={`w-2/5 bg-white m-2 p-5 border-b-2 ${borderColors[index]} rounded-t-lg`}
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
