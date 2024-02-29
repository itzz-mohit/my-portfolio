import React from "react";
import {
  bootstrap,
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  nodejs,
  react,
  redux,
  tailwind,
  vercel,
} from "../assets/index";

const Skills = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="skills">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between gap-8">
        <div className="about-info">
          <p className="text-4xl font-bold mb-5 border-b-[5px] w-[250px] border-indigo-600 pb-2 text-left ">
            My Tech Stack
          </p>

          <p className="pb-24 text-left">
            I am a highly skilled MERN Stack Developer with a solid foundation
            in computer science, holding a Bachelor's degree in Computer
            Science. My expertise lies in JavaScript and React, where I excel in
            crafting robust and scalable web applications. With a passion for
            cutting-edge technologies and a commitment to delivering
            high-quality solutions, I bring a wealth of experience in full-stack
            development. I thrive in dynamic environments, leveraging my strong
            analytical and problem-solving skills to contribute effectively to
            project success. Let's connect and explore opportunities to
            collaborate on innovative projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          <img src={html} alt="" className="skills-logo w-16 h-16" />
          <img src={css} alt="" className="skills-logo w-16 h-16" />
          <img src={bootstrap} alt="" className="skills-logo w-16 h-16" />
          <img src={tailwind} alt="" className="skills-logo w-16 h-16" />
          <img src={javascript} alt="" className="skills-logo w-16 h-16" />
          <img src={react} alt="" className="skills-logo w-16 h-16" />
          <img src={redux} alt="" className="skills-logo w-16 h-16" />
          <img src={nodejs} alt="" className="skills-logo w-16 h-16" />
          <img src={git} alt="" className="skills-logo w-16 h-16" />
          <img src={github} alt="" className="skills-logo w-16 h-16" />
          <img src={vercel} alt="" className="skills-logo w-16 h-16" />
          <img src={express} alt="" className="skills-logo w-16 h-16" />
          <img src={mongodb} alt="" className="skills-logo w-16 h-16" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
