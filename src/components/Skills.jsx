import React from "react";
import c from "../assets/skills/c.svg";
import css from "../assets/skills/css.svg";
import html from "../assets/skills/html.svg";
import javascript from "../assets/skills/javascript.svg";
import nextjs from "../assets/skills/nextjs.svg";
import react from "../assets/skills/react.svg";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: c,
      title: "Basic C",
      style: "shadow-blue-600",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h2 className="text-4xl font-bold inline border-b-4 border-accent">
            Skills
          </h2>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
