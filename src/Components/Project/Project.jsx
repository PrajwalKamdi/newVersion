import React from "react";
import Portfolio from "/src/assets/Portfolio.png";
import ApnaEcom from "/src/assets/ApnaEcom.png";
import Recipe from "/src/assets/Recipe.png";

import { Link } from "react-router-dom";
function Project() {
  return (
    <>
      <div id="project" className="p-5 pt-10 md:px-10 lg:px-16 xl:px-20  2xl:px-32">
        <h2 className="text-2xl md:text-4xl p-10 text-center">My Projects</h2>
        <h3 className="text-md capitalize font-semibold pb-5">
          On the basic of my front-end and backend developement skills i have
          created some projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className=" bg-[#121214] shadow-xl hover:shadow-2xl duration-500  hover:shadow-gray-700 md:p-10 p-5 rounded-xl space-y-2">
            <h1 className="text-xl md:text-2xl">E-Commerce Website</h1>
            <img src={ApnaEcom} alt="image" />
            <p className="">
              Developed a comprehensice ECommerce website using React.
            </p>
            <button className=" border p-2 rounded-md w-full">
              <Link to={"https://apna-ecom.vercel.app/"}>Live Demo</Link>
            </button>
          </div>

          <div className="rounded-xl space-y-2 bg-[#121214] md:p-10 p-5 shadow-xl hover:shadow-2xl  hover:shadow-gray-700 duration-500 ">
            <h1 className="text-xl md:text-2xl">Recipe Application</h1>
            <img src={Recipe} alt="image" />
            <p className="">
              Developed a fully responsive Recipe web application using React.
            </p>

            <button className=" border p-2 rounded-md w-full">
              <Link to={"https://recipe-application-alpha.vercel.app/"}>
                Live Demo
              </Link>
            </button>
          </div>
          <div
            className="rounded-xl md:p-10
           p-5 space-y-2 bg-[#121214] shadow-xl hover:shadow-2xl  hover:shadow-gray-700 duration-500"
          >
            <h1 className="text-xl md:text-2xl">Personal Portfolio</h1>
            <img src={Portfolio} alt="image" />
            <p className="">
              Built a personal portfolio website to using react and
              react-router.
            </p>
            <button className=" border p-2 rounded-md w-full">
              <Link   to={"https://portfolio-pk-02.netlify.app/"}>
                Live Demo
              </Link>
            </button>
           
          </div>

          <div className="rounded-xl md:col-span-3 bg-[#121214] shadow-xl hover:shadow-2xl  hover:shadow-gray-700  duration-500 p-5 md:p-10">
            <h1 className="text-xl md:text-2xl">Hospital Management System</h1>
            <div className="py-2">
              <ul className="space-y-5">
                <li>
                  1. Developed a hospital management system leveraging React for
                  Front- End & java with Spring boot for the Back-End, created
                  some REST API to perform CURD Operation.
                </li>
                <li>
                  2. Secured the application using spring security by
                  implementing the basic authentication to ensure user access
                  control and data protection.
                </li>
                <li>
                  3. Utilized MySQL database with Spring Data JPA and hibernate
                  for the creation & alteration of tables and also documented
                  the application using swagger.
                </li>
                <li>
                  4. Technologies : React, React Router, Redux Toolkit, Java ,
                  Spring Boot, Spring Data JPA, Spring Security.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
