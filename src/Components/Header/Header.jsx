import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

function Header() {
  const [menuBar, setMenuBar] = useState(false);
  const handle = () => {
    setMenuBar(!menuBar);
  };
  return (
    <>
      <header className=" bg-[#08152b]  text-white fixed top-0 left-0 right-0 p-3 md:px-10 lg:px-16 xl:px-20  2xl:px-32 py-5">
        <nav className="flex justify-between items-center">
         
            <Link
              to={"/"}
              smooth={true}
              duration={500}
              className="text-[#00abf0] font-semibold cursor-default md:text-[20px]"
            >
              Prajwal Kamdi
            </Link>
         
          <div>
            <ul className="hidden md:flex  md:gap-10 lg:gap-16 xl:gap-20  2xl:gap-32 justify-between">
              <li>
                <Link
                  to={"/"}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline hover:underline-offset-8"
                  activeClass="active"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"education"}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline hover:underline-offset-8"
                  activeClass="active"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to={"skills"}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline hover:underline-offset-8"
                  activeClass="active"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to={"project"}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline hover:underline-offset-8"
                  activeClass="active"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  to={"about"}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:underline hover:underline-offset-8"
                  activeClass="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <HiMenu
            onClick={handle}
            className={`md:hidden ${menuBar ? "hidden" : "block"}`}
          />
          <RxCross1
            onClick={handle}
            className={`md:hidden ${menuBar ? "block" : "hidden"}`}
          />
        </nav>

        <div>
          <ul className={`${menuBar ? "flex" : "hidden"} flex-col gap-10`}>
            <li className="mt-5">
              <Link to={"/"} onClick={handle} className="">
                Home
              </Link>
            </li>
            <li>
              <Link to={"education"} onClick={handle}>
                Education
              </Link>
            </li>
            <li>
              <Link to={"skills"} onClick={handle}>
                Skills
              </Link>
            </li>
            <li>
              <Link to={"project"} onClick={handle}>
                Project
              </Link>
            </li>
            <li>
              <Link to={"about"} onClick={handle}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
