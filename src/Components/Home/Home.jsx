import React from "react";
import img1 from "/src/assets/img1.jpg";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main id="/"  className="  mt-[60px] bg-[#02060c] text-white ">
        <section className="p-3  xl:flex lg:flex 2xl:flex items-center justify-between md:p-10 lg:p-16 xl:p-20  2xl:p-32">
          <div className="pb-10">
            <img src={img1} alt="" className="mt-5 rounded-full w-[400px] shadow-lg shadow-[#00abf0]" />
          </div>
          <div className="lg:w-1/2 xl:w-1/2 2xl:w-1/2">
            <h1 className="text-xl font-semibold">Hi I'm Prajwal Kamdi</h1>
            <ReactTyped
              strings={["FrontEnd Developer", "Java Developer"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
              className="text-[#00abf0] font-semibold text-xl"
            />
            <p className="capitalize">
              passionate & adaptable fresher commited to mastering frontEnd
              development with react and also java developement with spring and
              springboot
            </p>
            {/* <Link className=" mr-3 " to={"about"}>
            <button className=" mt-3 p-2 border-[1px] border-solid border-[#00abf0] hover:bg-[#00abf0] duration-300">
            Let's Connect
            </button>
          </Link> */}
          <Link className="rounded-sm"
            to={
              "https://drive.google.com/file/d/154CZubpMmh3z3xnJChmF4PHdyQRyZsuL/view?usp=sharing"
            }
          >
            <button className="p-2  my-2 border-[1px] border-solid border-[#00abf0] hover:bg-[#00abf0] duration-300">
             View Resume
            </button>
          </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
