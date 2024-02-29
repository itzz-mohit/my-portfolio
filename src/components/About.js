import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2 text-left">
            About Me
          </h2>

          <p className="pb-5 text-left">
            Hi, My Name is Mohit Kumar. I am a Frontend Developer. I build
            beautifull websites with React and Tailwind CSS.
          </p>
          <p className="pb-5 text-left">
            I am proficient in Frontend skills like JavaScript, React.js, Redux,
            Redux ToolKit, Axios, Tailwind CSS and many more.
          </p>

          <p className="pb-5 text-left">
            In backend I know Node.js, Express.js, MongoDB, and Mongoose
          </p>

          <p className="text-justify">
            In my spare time I love reading books and explore some more
            technologies.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto mt-14"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
