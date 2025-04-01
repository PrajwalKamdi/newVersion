import React from "react";
// import { Link } from "react-scroll";

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className=" px-3 text-sm text-gray-300 bg-[#0e0d0d]  md:px-28 py-10 ">
      <div className="flex py-8  space-x-5 md:space-x-10 justify-center  md:p-10">
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
          <Link to={"https://www.instagram.com/prajwal_kamdi07/"}>
            <FaInstagram size={20} />
          </Link>
        </div>
        <hr />
        <div className="flex gap-2 items-center justify-center pt-10">
          <PiCopyrightLight size={25} />
          <p>2025 Prajwal Kamdi All Rights Reserved</p>
        </div>
        <div className="flex items-center justify-center gap-1">
            <p>Made with </p>
            <FaHeart className="text-red-700" />
        </div>
      </footer>
    </>
  );
}
