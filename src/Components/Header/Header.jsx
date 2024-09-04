import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { NavLink }  from "react-router-dom"
import { Element, Link } from "react-scroll";
import Home from "../Home/Home";

function Header() {
  const [menuBar, setMenuBar] = useState(false);
  const handle = () => {
    setMenuBar(!menuBar);
  };
  return (
    <>
      <header className="bg-[#040b16] text-white fixed top-0 left-0 right-0 p-3 md:px-10 lg:px-16 xl:px-20  2xl:px-32 py-5">
        <nav className="flex justify-between items-center">
          <div>
            <span className="text-[#00abf0] font-semibold">Prajwal Kamdi</span>
          </div>
          <div>
            <ul className="hidden md:flex  md:gap-10 lg:gap-16 xl:gap-20  2xl:gap-32 justify-between">            
                <li>
                  <Link
                    to={"/"}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
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
                    className="cursor-pointer"
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
                    className="cursor-pointer"
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
                    className="cursor-pointer"
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
                    className="cursor-pointer"
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
                  <NavLink
                    to={""}
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                   Home
                  </NavLink>
                </li>  
                <li>
                  <NavLink
                    to={"education"}
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                   Education
                  </NavLink>
                </li>  
                <li>
                  <NavLink
                    to={"Skills"}
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                   Skills
                  </NavLink>
                </li>  
                <li>
                  <NavLink
                    to={"project"}
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                   Project
                  </NavLink>
                </li>  
                <li>
                  <NavLink
                    to={"contact"}
                    className={({ isActive }) =>
                      isActive ? "text-[#00abf0] font-semibold" : "text-white"
                    }
                  >
                   Contact
                  </NavLink>
                </li>  
            </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
