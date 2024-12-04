import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
//import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <header className="flex justify-between px-5 py-5 bg-primary text-white fixed w-full z-10">
      <a href="/" className="text-3xl font-bold text-accent font-mono">
        Mohit
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block font-mono">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Zf6k3SZa7iRjWqGQbwsY4z4gzbb9y3By/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={
          !toggle ? "mobile-nav left-[-100%] mt-5" : "mobile-nav left-0 mt-5"
        }
      >
        <ul className="flex flex-col text-left pl-1 space-y-2">
          <li>
            <a href="/#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="/#skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Zf6k3SZa7iRjWqGQbwsY4z4gzbb9y3By/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
