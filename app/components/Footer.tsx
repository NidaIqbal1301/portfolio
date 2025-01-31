import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

const Footer = () => {
  return (
    <footer
      id="footer"
      className="container border-t border-gray-600 py-4 md:py-[2rem] mx-auto my-8 lg:px-[12rem]"
    >
      <div className="grid items-center grid-cols-2 gap-4 justify-items-center md:grid-cols-3">
        <p className="text-[#A594fd] text-sm">Feel free to contact me</p>
        <p className="text-gray-400 text-sm">nidaiqbal702@gmail.com</p>
        <div className="flex items-center justify-center gap-4">
          {renderSocialIcons()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
