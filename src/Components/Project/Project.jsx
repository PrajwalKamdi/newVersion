import React from "react";
import Portfolio from "/src/assets/Portfolio.png";
import ApnaEcom from "/src/assets/ApnaEcom.png";
import Review from "/src/assets/Review.png";
import Recipe from "/src/assets/Recipe.png";
import Employee from "/src/assets/Employee.png";
import { Link } from "react-router-dom";
function Project() {
  return (
    <>
      <div id="project" className="pt-10">
        <div className="text-white/90 px-5 md:px-20">
          <h2 className="text-2xl md:text-4xl p-10 text-center">My Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-10 lg:px-20 gap-10">
        <div className="space-y-2 bg-[#1a1a1a] p-5 rounded-lg shadow-lg mb-5 md:mb-0">
          <h1 className="font-bold  md:text-xl mb-3 ">RateSphere</h1>
          
            <img
              src={Review}
              alt="Portfolio"
              className="rounded-lg shadow-lg "
            />
            <h4 className="text-md font-semibold mt-2">
              Tech Stack: NodeJs, ExpressJs, MySql, ReactJs, JWT, Tailwind CSS
            </h4>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Implemented a secure single login system using JWT
                authentication for both regular users and admin roles.
              </li>
              <li>
                Built a registration module allowing new users to sign up and
                submit ratings for stores, integrated role-based dashboards.
              </li>
              <li>
                Designed a responsive user interface for seamless interaction
                across desktop and mobile devices.
              </li>
              <li className="flex gap-3 mt-2">
                <Link className="px-5 py-2  border rounded-md hover:bg-neutral-800">
                  Live
                </Link>
                <Link
                  to={
                    "https://github.com/PrajwalKamdi/Employee-Management-System"
                  }
                  className="px-5 py-2  border rounded-md hover:bg-neutral-800"
                >
                  Code
                </Link>
              </li>
            </ul>
          
        </div>
        <div className="space-y-2 bg-[#1a1a1a] p-5 rounded-lg shadow-lg mb-5 md:mb-0">
          <h1 className="font-bold  md:text-xl mb-3 ">RateSphere</h1>
          
            <img
              src={Employee}
              alt="Portfolio"
              className="rounded-lg shadow-lg "
            />
            <h4 className="text-md font-semibold mt-2">
              Tech Stack: NodeJs, ExpressJs, MongoDB, Rest API, ReactJs, JWT,
              Tailwind CSS
            </h4>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Implemented complete CRUD operations to handle employee records
                such as creation, updates, deletion, and viewing.
              </li>
              <li>
                Secured the application using JWT-based authentication and for
                role based access control.
              </li>
              <li>
                Built RESTful APIs with Node.js and Express.js for efficient
                communication between the front-end and back-end.
              </li>
              <li className="flex gap-3 mt-2">
                <Link
                  to={
                    "https://employee-management-system-frontend-o557.onrender.com/"
                  }
                  className="px-5 py-2  border rounded-md hover:bg-neutral-800"
                >
                  Live
                </Link>
                <Link className="px-5 py-2  border rounded-md hover:bg-neutral-800">
                  Code
                </Link>
              </li>
            </ul>

        </div>
        <div className="space-y-2 bg-[#1a1a1a] p-5 rounded-lg shadow-lg mb-5 md:mb-0">
          <h1 className="font-bold  md:text-xl mb-3 ">
            E-Commerce Web Application
          </h1>
          
            <img
              src={ApnaEcom}
              alt="Portfolio"
              className="rounded-lg shadow-lg "
            />
            <h4 className="text-md font-semibold mt-2">
              Tech Stack: React, Redux Toolkit, Dummy API, React Router, CSS
            </h4>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Implemented efficient routing with React Router and optimized
                component rendering for enhanced performance.
              </li>
              <li>
                Utilized Redux Toolkit for robust state management, ensuring
                smooth and scalable data flow across the application.
              </li>
              <li>
                Designed the interface to be fully responsive, providing a
                seamless and intuitive user experience across all devices.
              </li>
              <li className="flex gap-3 mt-2">
                <Link
                  to={"https://apna-ecom.vercel.app/"}
                  className="px-5 py-2  border rounded-md hover:bg-neutral-800"
                >
                  Live
                </Link>
                <Link
                  to={"https://github.com/PrajwalKamdi/Apna-Ecom"}
                  className="px-5 py-2  border rounded-md hover:bg-neutral-800"
                >
                  Code
                </Link>
              </li>
            </ul>

        </div>
        <div className="space-y-2 bg-[#1a1a1a] p-5 rounded-lg shadow-lg mb-5 md:mb-0">
          <h1 className="font-bold md:text-xl mb-3 ">Recipe Web Application</h1>

            <img
              src={Recipe}
              alt="Portfolio"
              className="rounded-lg shadow-lg "
            />
            <h4 className="text-md font-semibold mt-2">
              Tech Stack: React, Redux Toolkit, Dummy API, React Router, CSS
            </h4>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Implemented dynamic routing with React Router for seamless
                navigation between components.
              </li>
              <li>
                Utilized Redux Toolkit for efficient state management and
                streamlined data handling.
              </li>
              <li>
                Designed a fully responsive UI to ensure a smooth and engaging
                user experience across all device types.
              </li>
              <li className="flex gap-3 mt-2">
                <Link to={"https://recipe-application-alpha.vercel.app/"} className="px-5 py-2  border rounded-md hover:bg-neutral-800">
                  Live
                </Link>
                <Link to={"https://github.com/PrajwalKamdi/Recipe_Application"} className="px-5 py-2  border rounded-md hover:bg-neutral-800">
                  Code
                </Link>
              </li>
            </ul>

        </div>
        <div className="space-y-2 bg-[#1a1a1a] p-5 rounded-lg shadow-lg mb-5 md:mb-0">
          <h1 className="font-bold md:text-xl mb-3 ">
            Personal Portfolio Website
          </h1>
          
            <img
              src={Portfolio}
              alt="Portfolio"
              className="rounded-lg shadow-lg "
            />
            <h4 className="text-md font-semibold mt-2">
              Tech Stack: React, CSS, JavaScript, React Router
            </h4>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Implemented dynamic routing with React Router for smooth
                navigation between sections.
              </li>
              <li>
                Crafted a clean and modern UI with responsive design to ensure
                accessibility across all devices.
              </li>
              <li>
                Emphasized performance and user experience through optimized
                component structure and layout.
              </li>
              <li className="flex gap-3 mt-2">
                <Link to={"https://portfolio-pk-02.netlify.app/"} className="px-5 py-2  border rounded-md hover:bg-neutral-800">
                  Live
                </Link>
                <Link to={"https://github.com/PrajwalKamdi/newVersion"} className="px-5 py-2  border rounded-md hover:bg-neutral-800">
                  Code
                </Link>
              </li>
            </ul>

        </div>
        {/* <div className="space-y-2 bg-[#1a1a1a] p-5 rounded-lg shadow-lg mb-5 md:mb-0">
          <h1 className="font-bold md:text-xl mb-3">Hospital Management System</h1>
            <img
              src={Portfolio}
              alt="Portfolio"
              className="rounded-lg shadow-lg "
            />
           <h4 className="text-md font-semibold mt-2">
              Tech Stack:  React, React Router, Redux Toolkit, Java , Spring Boot, Spring Data JPA, Spring Security.
            </h4>
          <ul className="list-disc pl-5 mt-2">
            <li>Developed a hospital management system leveraging React for Front- End & java with Spring boot for the Back-End, created some REST API to perform CURD Operation.</li>
            <li>Secured the application using spring security by implementing the basic authentication to ensure user access control and data protection.</li>
            <li>Utilized MySQL database with Spring Data JPA and hibernate for the creation & alteration of tables and also documented the application using swagger.</li>
            <li></li>

          </ul>
        </div> */}
      </div>
    </>
  );
}

export default Project;
