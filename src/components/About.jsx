import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full xs:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#219be5]">
            About
          </h2>
        </div>

        <p className="text-lg mt-10">
          I am currently pursuing B.Tech in CSE with specialization in Software
          Engineering from{" "}
          <a
            href="https://kietgroup.in/"
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-gray-500"
          >
            KIET
          </a>
          . I completed the schooling from{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="border-b-2 border-gray-500"
          >
            Advanced foundation school
          </a>
          .
        </p>

        <br />

        <p className="text-lg">
        Hi, I'm Jothsna, a passionate and dedicated B.Tech student specializing in
        Computer Science with a focus on Artificial Intelligence and Data Science at
        Kakinada Institute of Engineering and Technology. My journey in technology is
        driven by curiosity and a desire to innovate, and I am constantly seeking new challenges to hone my skills.
        </p>

        <br />

        <p className="text-lg">
        I have a strong foundation in machine learning, having completed an intensive
         50-week course on the Foundations of Modern Machine Learning. My projects range
        from developing a machine learning model for image classification to creating an
        image-to-sketch application, showcasing my ability to apply complex algorithms 
        to solve real-world problems. I'm also currently working on a note-taking application
        using FastAPI, React, and MongoDB, demonstrating my proficiency in both backend and frontend development.
        </p>

        <br />

        <p className="text-lg">
        I believe in the power of technology to transform lives and am committed to continuous 
        learning and growth. As an avid coder and a classical dancer, I find a unique blend of logic
         and creativity in my endeavors, striving to make a meaningful impact in both the tech world and the arts.
        </p>
      </div>
    </div>
  );
};

export default About;
