import React from "react";
import nit from "/src/assets/nit.png"
import school from "/src/assets/school.png"
function Education() {
  return (
    <>
      <main id="education" className="  bg-[#02060c] text-white  p-3  md:px-10 lg:px-16 xl:px-20  2xl:px-32">
        <section>
            <h1 className="text-2xl py-10">My Education Background</h1>
            <div className="grid sm:p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10 ">
                <div className="p-5 border m-2 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-md shadow-[#00abf0] shadow-md ">
                    <img src={nit} alt="" className="rounded-md pb-4" />
                    <div>
                        <h3 className="font-semibold">BTech CGPA : 8.63</h3>
                        <h3>Computer science & engineering</h3>
                        <p>Nagpur institute of technology </p>
                        <p>Nagpur university : 2021-2024</p>
                    </div>
                </div>
                <div className=" p-5  border m-2 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-md shadow-md shadow-[#00abf0] ">
                    <img src={school} alt="" className="rounded-md"  />
                    <div>
                        <h3 className="font-semibold">12th: 72.42% (State Board)</h3>
                        <h3>Bhalerao junior science college, saoner</h3>
                        <p>General science: 2020</p>
                    </div>
                </div>
                <div className="p-5 border m-2 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-md shadow-md shadow-[#00abf0] ">
                    <img src={school} alt="" className="rounded-md" />
                    <div>
                        <h3 className="font-semibold">10th : 90.20% (State Board)</h3>
                        <h3>bhikulal chandak high school, kelod</h3>
                        <p>2018</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}

export default Education;
