import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import Contact from "./Conatct";
function About() {
  return (
    <div
      id="about"
      className="px-5  mb-10 md:px-10 lg:px-16 xl:px-20  2xl:px-32  md:pt-10"
    >
      <div className="m-5">
        <h2 className="text-2xl md:text-4xl text-center py-5">Contact Me</h2>
        <h4 className="text-lg md:text-xl text-center">
          Below are the details to reach out to me
        </h4>
      </div>
      <div className="space-y-5">
        <div className="bg-[#121214] rounded-xl p-5 md:p-10 space-y-2">
          <h3 className="text-3xl text-white">Prajwal Kamdi</h3>
          <h4>Software Developer</h4>
          <h4>Email : prajwalkamdi18@gmail.com</h4>
          <div className="py-5">
            <h3 className="text-xl">Find Me In</h3>
            <div className="flex  justify-start space-x-5 items-center">
              <Link
                to={"https://www.linkedin.com/in/prajwal-kamdi-b016b3286/"}
                className="my-2"
              >
                <FaLinkedin size={30} />
              </Link>
              <Link to={"https://github.com/PrajwalKamdi"}>
                <GrGithub size={30}/>
              </Link>
             
              
            </div>
          </div>
        </div>

        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default About;
