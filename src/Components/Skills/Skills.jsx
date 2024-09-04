import React from "react";
import combine from "/src/assets/combine.png";
import react from "/src/assets/react.png";
import java from "/src/assets/java.png";
import spring from "/src/assets/spring.png";
import tailwind from "/src/assets/tailwind.png";

function Skills() {
  return (
    <>
      <main
        id="skills"
        className="p-3 md:px-10 lg:px-16 xl:px-20  2xl:px-32 bg-[#02060c] text-white "
      >
        <section>
          <h1 className="text-xl py-10">My Coding & Developement Skills</h1>
          <div className="grid sm:p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-10 ">
            <div className=" border p-5  md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-md shadow-md  shadow-[#00abf0] hover:scale-110 duration-500">
              <img src={combine} alt="" className="" />
              <img
                src={react}
                alt=""
                className="rounded-md w-[100px] mx-auto"
              />

              <div>
                <h3 className="font-semibold capitalize">
                  Competent in FrontEnd developement with html, css, javaScript,
                  and react
                </h3>
              </div>
            </div>
            <div className="border p-5 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-m shadow-md  shadow-[#00abf0] hover:scale-110 duration-500">
              <img src={java} alt="" className="rounded-md" />
              <div>
                <h3 className="font-semibold capitalize">
                  Proficient in java language and having more than 3+ years of
                  experience in java world
                </h3>
              </div>
            </div>
            <div className="border flex flex-col justify-between  p-5 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-md shadow-md  shadow-[#00abf0] hover:scale-110 duration-500">
              <div>
                <img src={spring} alt="" className="rounded-md" />
              </div>
              <div>
                <h3 className="font-semibold capitalize">
                  {" "}
                  Competent in backend developement with spring, springboot, and
                  MYSQL database
                </h3>
              </div>
            </div>
            <div className="border flex flex-col justify-between  p-5 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-md shadow-md  shadow-[#00abf0] hover:scale-110 duration-500">
              <div className="my-10">
                <img src={tailwind} alt="" className="rounded-md " />
              </div>
              <div>
                <h3 className="font-semibold capitalize">
                  Skilled in tailwind css utility framework and can develope the
                  fully responsive web application
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Skills;
