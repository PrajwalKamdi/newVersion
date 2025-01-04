import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import img1 from "/src/assets/img1.jpg";
function Home() {
  return (
    <>
      <main id="/" className="mt-16 px-5 md:px-20">
        <section className="md:flex  md:items-center md:justify-center  md:min-h-screen">
          <div className="md:w-1/2">
            <h1 className="text-[29px] md:text-5xl font-semibold py-3">
              Hi I'm <span className="text-red-600">Prajwal Kamdi</span>
            </h1>
            <ReactTyped
              strings={[
                "Front-End Developer",
                "ReactJs Developer",
                "Java Full Stack Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
              className="text-[#00abf0] font-semibold text-2xl md:text-3xl"
            />
            <p className=" text-lg py-2">
              Highly passionate & detail-oriented developer with expertise in
              Java and Javascript, offering a unique blend of Backend and
              FrontEnd skills to deliver robust, scalable, and user-friendly
              application.
            </p>
            <div className="flex items-center justify-start space-x-5">
              <Link
                className="rounded-md"
                to={
                  "https://drive.google.com/file/d/1CAmhDfqvVw2RchX-6nu2EFn9P-_J_pYl/view?usp=sharing"
                }
              >
                <button
                  className="py-2 px-4 rounded-md font-semibold my-2 border-[1px]
               hover:text-black border-solid border-[#00abf0] hover:bg-[#00abf0] duration-500"
                >
                  View Resume
                </button>
              </Link>
              <Link
                className="py-2 px-5 rounded-md font-semibold my-2 border-[1px] w-fit
               hover:text-black border-solid border-[#00abf0] hover:bg-[#00abf0] duration-500 flex items-center space-x-1"
                to={"https://www.linkedin.com/in/prajwal-kamdi-b016b3286/"}
              >
                LinkedIn
                <FaLinkedin size={25} color="" />
              </Link>
            </div>
          </div>
          <div className="rounded-lg  md:p-5 md:w-1/2 md:mx-auto">
            <img
              src={img1}
              alt="Img"
              className="rounded-3xl bg-slate-700 h-[300px] md:h-[400px] "
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

