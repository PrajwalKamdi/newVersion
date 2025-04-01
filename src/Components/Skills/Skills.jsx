import React from "react";
import { FaJava } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiJavascript, SiNodedotjs, SiPython, SiReactquery, SiReactrouter, SiRedux, SiSpring, SiSpringboot } from "react-icons/si";
function Skills() {
  return (
    <main
    id="skills" className="flex items-center px-5 md:px-10 lg:px-16 xl:px-20  2xl:px-32"
    >
      <section className="">
        <h1 className="text-2xl py-5 md:text-4xl  text-center" >My Coding And Developement Skills</h1>
        <section  className=" flex flex-wrap gap-5">
          <div className="mt-5 px-5 md:px-10 hover:shadow-2xl hover:shadow-gray-700 duration-500 shadow-sm  py-14 rounded-xl   bg-[#121214] w-full flex gap-10 justify-between items-center">
            <div className="space-y-2">
              <p className="md:text-3xl text-[28px] py-2">Programming Language</p>
              <ul className="text-lg md:flex ">
                <li className="flex items-center">
                  1. Java
                  <FaJava size={30} color="red" className="mx-1"></FaJava>
                </li>
                <li className="flex items-center">
                  2. Javascript
                  <SiJavascript
                    size={25}
                    color="yellow"
                    className="mx-1"
                  ></SiJavascript>
                </li>
                <li className="flex items-center">
                  3. Python
                  <SiPython
                    size={25}
                    color="yellow"
                    className="mx-1"
                  ></SiPython>
                </li>
              </ul>
              <p className="capitalize leading-6">
                Skilled in Java and Javascript, having more than 3+ years of experience in java and Javascript world, Python is my secondary language.
                <br />I have strong knowledge of OOPs concepts and data structures.
              </p>
            </div>
          </div>
          <div className="px-5 md:px-10 hover:shadow-2xl hover:shadow-gray-700 duration-500  shadow-sm  py-14 rounded-xl   bg-[#121214] w-full">
            <div className="space-y-2">
              <p className="text-3xl py-2">Front-End Library</p>
              <ul className="text-lg md:flex flex-wrap md:flex-nowrap items-center">
                <li className="flex space-x-1 pr-1 items-center">
                  1. ReactJs<RiReactjsFill size={40} color="teal" className="px-1"/>
                </li>
                <li className="flex space-x-1 pr-2 items-center" >
                  2. React-Router <SiReactrouter size={40} color="teal" className="px-1" />
                </li>
                <li className="flex space-x-1 pr-2 items-center">
                  3. React-Query <SiReactquery size={35} color="teal" className="px-1" />
                </li>
                <li className="flex space-x-1 pr-2 items-center">
                  4. Redux-Toolkit<SiRedux size={35} color="teal" className="px-1" />
                </li>
              </ul>
              <p className="capitalize leading-6">
                Proficient in frontEnd developement with strong knowledge of
                reactJs, and other third party libraries. Skilled in developing
                the responsive web application with Tailwind CSS.
              </p>
            </div>
          </div>{" "}
          <div className="px-5 md:px-10 hover:shadow-2xl hover:shadow-gray-700 duration-500 shadow-sm  py-14 rounded-xl   bg-[#121214] w-full ">
            <div className="space-y-2">
              <p className="text-3xl py-2">Backend Framework</p>
              <ul className="text-lg md:space-x-2 md:flex items-center">
                <li className="flex items-center space-x-2">
                  1. Spring <SiSpring size={35} color="green" className="px-1" />
                </li>
                <li className="flex items-center space-x-2">
                  2. Spring-Boot <SiSpringboot size={35} color="green" className="px-1" />
                </li>
                <li className="flex items-center space-x-2">
                  4. NodeJs <SiNodedotjs  size={35} color="yellow" className="px-1"/>
                </li>
                <li className="flex items-center space-x-2">
                  3. ExpressJs <SiExpress  size={35} color="yellow" className="px-1"/>
                </li>
              </ul>
              <p className="capitalize">
                Competent in backend developement with spring, springboot, & MYSQL database.
                <br/>
                Can develope the complete backend using ExpressJs, NodeJs, & MongoDb database.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Skills;
