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
      <header className=" bg-[#121214]/90 w-full  px-5 py-5 md:px-20 fixed top-0 left-0">
        <nav className="flex justify-between items-center ">
          <Link
            to={"/"}
            smooth={true}
            duration={500}
            className="text-[#00abf0] text-lg hover:cursor-pointer font-semibold cursor-default md:text-[20px]"
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
                  className="cursor-pointer hover:text-[#00abf0]  font-semibold duration-500 hover:underline hover:underline-offset-8"
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
                  className="cursor-pointer duration-500 hover:text-[#00abf0] font-semibold  hover:underline hover:underline-offset-8"
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
                  className="cursor-pointer duration-500 hover:text-[#00abf0]  font-semibold  hover:underline hover:underline-offset-8"
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
                  className="cursor-pointer duration-500 hover:text-[#00abf0]  font-semibold  hover:underline hover:underline-offset-8"
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
                  className="cursor-pointer duration-500 hover:text-[#00abf0]  font-semibold  hover:underline hover:underline-offset-8"
                  activeClass="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <HiMenu
            onClick={handle}
            size={25}
            color="#00abf0"
            className={`md:hidden ${menuBar ? "hidden" : "block"}`}
          />
          <RxCross1
            onClick={handle}
            size={25}
            color="#00abf0"
            className={`md:hidden ${menuBar ? "block" : "hidden"}`}
          />
        </nav>

        <div className={`${menuBar ? "flex" : "hidden"} h-screen`}>
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
