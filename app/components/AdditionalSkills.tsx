import React from "react";

const AdditionalSkills = () => {
  const AdditionalSkills = [
    "MS Office",
    "English Shorthand (100/W.P.M)",
    "English Typing (50/W.P.M)",
    "Github",
    "Responsive Web Design (RWD)",
    "TeamWork & Quick learning",
  ];
  return (
    <section
      id="additional-skills"
      className="container px-4 mx-auto my-4 md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl font-semibold md:my-20">
        Additional Skills
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {AdditionalSkills.map((skill, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: "#746FD1" }}
            ></div>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalSkills;
