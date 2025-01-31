"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MenuIcon, X } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com",
      icon: <FaLinkedin />,
      label: "Linkedin",
    },
    { 
      href: "https://www.github.com", 
      icon: <FaGithub />, 
      label: "Github",
    },
  ];

  const renderLinks = () =>
    navLinks.map(({ id, label }) => (
      <li
        key={id}
        className="font-semibold text-sm transition cursor-pointer hover:text-[#A594FD]"
        onClick={() => handleLinkClick(id)}
      >
        {label}
      </li>
    ));

  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        target="_blank"
        aria-label={label}
        className="transition hover:text-[#A594FD]"
      >
        {icon}
      </Link>
    ));

  return (
    <nav className="container z-20 flex items-center justify-between p-4 mx-auto md:pt-8 md:justify-around">
      <h1 className="z-30 text-xl font-bold transition-transform duration-300 cursor-pointer hover:-rotate-6">
        My Portfolio
      </h1>

      {/* ✅ Always visible on medium screens (md) and larger */}
      <ul className="hidden md:flex gap-6">{renderLinks()}</ul>

      <div className="items-center hidden gap-4 md:flex">
        {renderSocialIcons()}
      </div>

      {/* ✅ Mobile Menu (Only visible on small screens) */}
      <button className="z-30 md:hidden" onClick={handleMenuToggle}>
        {isOpen ? <X /> : <MenuIcon />}
      </button>

      {/* ✅ Mobile menu - Only appears on small screens (sm) */}
      <div
        className={`absolute md:hidden bg-[#0f1724] z-50 left-0 top-[58px] w-full p-4 
          transition-all duration-500 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-[200%] opacity-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-4">{renderLinks()}</ul>

        <div className="flex items-center justify-center gap-4 mt-6">
          {renderSocialIcons()}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
