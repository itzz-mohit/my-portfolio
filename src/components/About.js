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
            Hello, my name is Mohit Kumar, and I am a professional Web
            Developer. I specialize in building visually appealing and highly
            functional websites using modern web technologies.
          </p>
          <p className="pb-5 text-left">
            I have expertise in frontend development, including skills in
            JavaScript, React.js, React Native, Redux Toolkit, Axios, Tailwind
            CSS, and more.
          </p>

          <p className="pb-5 text-left">
            On the backend, I am proficient in Node.js, Express.js, MongoDB, and
            Mongoose.
          </p>

          <p className="text-justify">
            In my free time, I enjoy reading books and exploring emerging
            technologies to expand my knowledge and skills.
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
