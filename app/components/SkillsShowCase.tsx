"use client";
import React, { useState } from "react";
import ProgressCircular from "./ProgressCircular";

const SkillsShowCase = () => {
  const [showAll, setShowAll] = useState(false);
  const skills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "Tailwind CSS", value: 88 },
    { name: "Figma", value: 50 },
    { name: "React", value: 75 },
    { name: "Next.js", value: 65 },
    { name: "Sanity CMS", value: 70 },
  ];

  const toggleSkillsDisplay = () => {
    setShowAll(!showAll);
  };

  const displayedSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <section
      id="skills"
      className="container px-4 mx-auto my-4 md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl font-semibold md:my-20">My Skills</h1>

      <div className="grid grid-cols-2 gap-4 mb-6 justify-items-center lg:grid-cols-4 lg:gap-8">
        {displayedSkills.map((skill, index) => (
          <ProgressCircular key={index} name={skill.name} value={skill.value} />
        ))}
      </div>

      <div className="flex justify-center mt-4 ">
        <button className="btn-grad rounded-lg" onClick={toggleSkillsDisplay}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </section>
  );
};

export default SkillsShowCase;
