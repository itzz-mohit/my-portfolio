import React from "react";
import HeroImg from "../assets/hero-img.png";
import { Typewriter } from "react-simple-typewriter";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineDownload,
} from "react-icons/ai";

const Introduction = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center text-left md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />
            I am{" "}
            <span className="text-accent">
              <Typewriter
                words={["Mohit Kumar", "a Frontend Developer"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, and React JS.
          </p>

          <div className="flex py-5">
            <a
              href="https://www.linkedin.com/in/mohit-kumar-18945b33a/"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
              rel="noreferrer"
            >
              <AiOutlineLinkedin size={40} />
            </a>
            <a
              href="https://github.com/itzz-mohit"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
              rel="noreferrer"
            >
              <AiOutlineGithub size={40} />
            </a>
            <a
              href="https://drive.google.com/file/d/1Zf6k3SZa7iRjWqGQbwsY4z4gzbb9y3By/view?usp=sharing"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
              rel="noreferrer"
            >
              <AiOutlineDownload size={40} />
            </a>
          </div>

          <a
            href="/#projects"
            className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="md:mt-0 mt-8">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lg:w-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
