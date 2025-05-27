import React from "react";
function Education() {
  return (
    <>
      <main
        id="education"
        className="min-h-screen px-5 flex items-center  md:px-10 lg:px-16 xl:px-20  2xl:px-32"
      >
        <section className="space-y-3">
          <h1 className="text-2xl md:text-4xl py-5 text-center">
            My Education Background
          </h1>
          <section className="my-5 flex flex-col gap-5 md:flex-row">
            <div className="w-full hover:shadow-2xl hover:shadow-gray-700 duration-500 px-5  md:px-10 shadow-sm  py-14 rounded-xl text-xl  bg-[#121214]  flex gap-5 md:gap-10 justify-between items-center">
              <div className="space-y-2">
                <p>BTech In Computer(CSE)</p>
                <p className=" text-gray-400 text-sm ">
                  Nagpur University 2021-2024
                </p>
              </div>
              <div className="md:px-4 px-2 py-2 bg-red-700 text-black rounded-xl font-semibold shadow-2xl shadow-gray-400 text-sm md:text-base">
                82%
              </div>
            </div>
            <div className=" w-full px-5 md:px-10 hover:shadow-2xl hover:shadow-gray-700 duration-500  shadow-sm  py-14 rounded-xl text-xl  bg-[#121214]  flex gap-5 md:gap-10 justify-between items-center">
              <div className="space-y-2">
                <p>Higher Secondary Education</p>
                <p className=" text-gray-400 text-sm">
                  Bhalerao Science College, Saoner 2019-2020
                </p>
              </div>
              <div className="md:px-4 px-2 py-2 bg-red-700 text-black rounded-xl font-semibold shadow-2xl shadow-gray-400  text-sm md:text-base">
                72%
              </div>
            </div>{" "}
            <div className="md:px-10 px-5 w-full hover:shadow-2xl hover:shadow-gray-700 duration-500 shadow-sm  py-14 rounded-xl text-xl  bg-[#121214]  flex gap-5 md:gap-10 justify-between items-center">
              <div className="space-y-2">
                <p>Secondary School Education</p>
                <p className="text-sm text-gray-400">
                  Bhikulal High School, Kelod 2017-2018
                </p>
              </div>
              <div className="md:px-4 px-2 py-2 bg-red-700 text-black rounded-xl font-semibold shadow-2xl shadow-gray-400  text-sm md:text-base">
                90%
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Education;
