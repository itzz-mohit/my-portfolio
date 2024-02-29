import React from "react";
import { AiOutlinePhone, AiOutlineMessage } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>I am currently open for a fulltime Frontend Developer role.</p>
        <p>If you want to discuss that, feel free to email me or call me.</p>

        <div className="py-2 mt-2  flex justify-center ">
          <span className="flex items-center">
            <AiOutlineMessage className="mr-2" />
            <span className="font-bold mr-2">Email:</span> mohitbite@gmail.com
          </span>
        </div>
        <div className="py-2 flex justify-center">
          <span className=" flex items-center">
            <AiOutlinePhone className="mr-2" />
            <span className="font-bold mr-2">Phone: </span> +91 7091302506
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
