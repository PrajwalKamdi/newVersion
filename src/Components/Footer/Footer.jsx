
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="pt-20 px-3 text-sm text-gray-300 bg-[#040b16] md:p-20 h-max">
        <div className="grid grid-cols-3 justify-center">
          <div className="grid grid-cols-1 space-y-1 ">
            <p className="font-semibold">Resources</p>
            <Link to={"home"} className="hover:underline" >
              Home
            </Link>
            <Link to={"contact"} className="hover:underline">
              About
            </Link>
          </div>
          <div className="grid grid-cols-1 space-y-1">
            <p className="font-semibold ">Follow </p>
            <Link
              to={"https://github.com/PrajwalKamdi"}
              className="hover:underline"
            >
              GitHub
            </Link>
            <Link
              to={"https://www.linkedin.com/in/prajwal-kamdi-b016b3286/"}
              className="hover:underline"
            >
              LinkedIn
            </Link>
          </div>
          <div className="grid grid-cols-1 space-y-1 ">
            <p className="font-semibold">Legal</p>
            <p className="hover:underline">Privacy Policy</p>
            <p className="hover:underline">Terms And Condition</p>
          </div>
        </div>
        <div className="flex py-8 pr-8 space-x-5 md:space-x-10 justify-end md:p-10">
          <Link to={"https://www.linkedin.com/in/prajwal-kamdi-b016b3286/"}>
            <FaLinkedin size={20} />
          </Link>
          <Link to={"https://github.com/PrajwalKamdi"}>
            <IoLogoGithub size={20} />
          </Link>
          <Link to={"https://www.facebook.com/"}>
            <FaFacebookF size={20} />
          </Link>
          <Link to={"https://x.com/i/flow/login"}>
            <FaXTwitter size={20} />
          </Link>
        </div>
        <p>Made with </p>
      </footer>
    </>
  );
}
