import React from "react";
import {
  AiOutlinePhone,
  AiOutlineMessage,
  AiOutlineDownload,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p className="text-lg mb-4">
          I am currently open for a full-time Frontend Developer role. If you
          want to discuss that, feel free to email me or call me.
        </p>

        <div className="flex flex-col items-center space-y-2">
          <a href="mailto:mohitbite@gmail.com" className="flex items-center">
            <AiOutlineMessage className="mr-2" />
            <span className="font-bold">Email:</span> mohitbite@gmail.com
          </a>

          <a href="tel:+917091302506" className="flex items-center">
            <AiOutlinePhone className="mr-2" />
            <span className="font-bold">Phone:</span> +91 7091302506
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/1NBbgeETrztipMKa8-z--GNi81S1ebFPM/view"
          target="_blank"
          type="button"
          className="inline-flex items-center justify-center mt-6 px-6 py-3 text-lg font-semibold bg-accent border-2 border-[#7477FF] text-white hover:bg-transparent hover:text-accent focus:outline-none focus:border-[#7477FF] transition duration-300 ease-in-out"
        >
          Download CV <AiOutlineDownload className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
