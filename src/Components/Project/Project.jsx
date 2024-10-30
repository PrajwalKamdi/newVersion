import React from "react";
import Portfolio from "/src/assets/Portfolio.png";
import ApnaEcom from "/src/assets/ApnaEcom.png";
import Recipe from "/src/assets/Recipe.png";

import { Link } from "react-router-dom";
function Project() {
  return (
    <>
      <div
        id="project"
        className="p-3 bg-[#02060c] text-white  md:px-10 lg:px-16 xl:px-20  2xl:px-32"
      >
        <h2 className="text-2xl pb-5">My Projects</h2>
        <h3 className="text-md capitalize font-semibold pb-5">
          On the basic of my front-end and backend developement skills  i have created some projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border p-4 space-y-2">
          <h1 className="text-xl md:text-2xl">E-Commerce Website</h1>
            <img src={ApnaEcom} alt="image" />
            <p className="">
              Developed a comprehensice E-Commerce website using React and by
              leveraging the dummy Api for prodcuts.This project primarily
              focuses on dyanmic routing by using react-router, product
              filtering, cart management, and state management with
              redux-toolkit. This web application is fully responsive for all
              devices and provides a great user experience.
            </p>
            <div className="py-2">
              <Link
                to={"https://apna-ecom.vercel.app/"}
                className="p-2 border rounded-md"
              >
                Live Demo
              </Link>
            </div>
          </div>

          <div className="border p-4 space-y-2">
          <h1 className="text-xl md:text-2xl">Recipe Application</h1>
            <img src={Recipe} alt="image" />
            <p className="">
              Developed a comprehensice E-Commerce website using React and by
              leveraging the dummy Api for prodcuts.This project primarily
              focuses on dyanmic routing by using react-router, product
              filtering, cart management, and state management with
              redux-toolkit. This web application is fully responsive for all
              devices and provides a great user experience.
            </p>
            <div className="py-2">
              <Link
                to={"https://recipe-application-alpha.vercel.app/"}
                className="px-2 border py-2 rounded-md "
              >
                Live Demo
              </Link>
            </div>
          </div>
          <div className="border p-2 space-y-2">
          <h1 className="text-xl md:text-2xl">Personal Portfolio</h1>
            <img src={Portfolio} alt="image" />
            <p className="">
              Built a personal portfolio website to using react and
              react-router.
            </p>
            <div className="py-2">
              <Link
                to={"https://portfolio-pk-02.netlify.app/"}
                className="p-2 border rounded-md"
              >
                Live Demo
              </Link>
            </div>
          </div>

          <div className="border p-2 space-y-2">
            <h1 className="text-xl md:text-2xl">Hospital Management System</h1>
            <div className="py-2">
              <ul className="space-y-5">
                <li>
                 1. Developed a hospital management system leveraging React for
                  Front- End & java with Spring boot for the Back-End, created
                  some REST API to perform CURD Operation.
                </li>
                <li>
                  2. Secured the application using spring security by implementing
                  the basic authentication to ensure user access control and
                  data protection.
                </li>
                <li>
                 3. Utilized MySQL database with Spring Data JPA and hibernate for
                  the creation & alteration of tables and also documented the
                  application using swagger.
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
