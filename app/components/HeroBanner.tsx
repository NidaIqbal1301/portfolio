import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <section className="container mx-auto my-4 px-4 md:my-16 md:px-8 lg:px-24 grid items-center grid-cols-1 justify-items-center md:grid-cols-2 md:gap-12">
      {/* Left Side - Text */}
      <div className="flex flex-col gap-6 md:gap-8 md:justify-self-start">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
          <span className="text-[#A594fd]">Hello, I'm Nida Iqbal,</span>
          <br />
          Frontend Developer
        </h1>
        <p className="text-sm text-gray-400 md:text-lg">
          I’m a passionate frontend developer dedicated to crafting visually
          stunning and intuitive user experiences. I transform complex problems
          into elegant, functional digital solutions.
        </p>
        <Link href="/CV.pdf" className="w-48 btn-grad rounded-lg">
          Download CV
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden md:block justify-self-end mt-8 md:mt-0 before:content-[''] before:bg-[#5a80d2] before:w-[70%] before:h-[70%] before:absolute before:top-[10rem] before:left-[15rem] before:rounded-full">
        <div className="relative p-2 border-2 rounded-full border-cyan-500">
          <div className="overflow-hidden rounded-full shadow-lg">
            <Image
              src="/image0.jpg"
              width={380}
              height={380}
              alt="Hero image"
              className="transition-transform duration-500 rounded-full hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
