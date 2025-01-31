const timeLine = [
  {
    year: "2024",
    exp: `Started working on my web developer projects, focusing on HTML, CSS, and Javascript.`,
  },
  {
    year: "2024",
    exp: `Advanced to front-end development with a focus on frame works like React.js.`,
  },
  {
    year: "2025",
    exp: `Started working on back-end development with a focus on Next.js.`,
  },
  {
    year: "2025",
    exp: `Advanced to full-stack development with a focus on database management and API integration.`,
  },
];
import React from "react";

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="container px-4 mx-auto my-8 md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl text-center font-semibold md:my-20">
        Experience As A GIAIC Student
      </h1>

      <div className="relative grid grid-cols-2 gap-4 mb-8 justify-items-center md:grid-cols-4">
        {timeLine.map((cv, index) => (
          <div key={index} className="flex flex-col items-center gap-8">
            <div className="relative z-10 flex items-center justify-center w-12 h-12 mb-2 bg-[#746fd1] rounded-full">
              {cv.year}
            </div>
            <div className="text-sm text-center text-gray-400 md:text-lg">
              <p className="">{cv.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
