import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
//import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-5 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Mohit
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
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
              href="https://drive.google.com/file/d/1NBbgeETrztipMKa8-z--GNi81S1ebFPM/view"
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
        <ul className="flex flex-col text-left pl-1">
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
            <a href="/#resume">Resume</a>
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
