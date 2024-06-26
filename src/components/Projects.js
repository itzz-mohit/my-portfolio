import React from "react";
import weather from "../assets/weather.jpg";
import food from "../assets/food.jpg";
import youtube from "../assets/youTube.jpg";
import todo from "../assets/Todo.jpg";
import lms from "../assets/lms.jpg";
import blog from "../assets/blog.jpg";

const Projects = () => {
  const projects = [
    {
      img: lms,
      title: "lms",
      desc: "Created a e-learning application using MERN Stack.",
      live: "",
      code: "https://github.com/itzz-mohit/the-lms",
    },
    {
      img: blog,
      title: "blog",
      desc: "Created a Online Blogging System using MERN Stack.",
      live: "",
      code: "",
    },
    {
      img: weather,
      title: "weatherApp",
      desc: "Crafted with JavaScript and Vanilla CSS, providing users with dynamic, location-based weather information.",
      live: "https://weather-app-three-chi-28.vercel.app/",
      code: "https://github.com/itzz-mohit/weather-app.git",
    },
    {
      img: food,
      title: "foodApp",
      desc: "A food website using ReactJS, Tailwind CSS, and integrating with Swiggy live APIs involves several steps.",
      live: "https://food-villa-orcin.vercel.app/",
      code: "https://github.com/itzz-mohit/food-villa.git",
    },
    {
      img: youtube,
      title: "youtubeClone",
      desc: "Build a professional YouTube clone with live YouTube APIs and advanced functionalities ",
      live: "https://youtube-six-gules.vercel.app/",
      code: "https://github.com/itzz-mohit/youtube.git",
    },
    {
      img: todo,
      title: "todoApp",
      desc: "Created a task management application using ReactJS and Redux Toolkit.",
      live: "https://react-learning-rho-seven.vercel.app/",
      code: "https://github.com/itzz-mohit/React-Learning/tree/main/12reduxToolkit",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[140px] border-indigo-600 pb-2 text-left">
            Projects
          </h2>

          <p className="pb-5 text-left">
            These are some of my projects. I have built these with HTML, CSS,
            JavaScript, React JS, Tailwind CSS, Node JS, Express JS, MongoDB and
            Redux Toolkit.
            <p>Check them out.</p>
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 "
              />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
