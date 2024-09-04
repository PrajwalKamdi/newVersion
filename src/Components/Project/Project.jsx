import React from 'react'
import myntra from "/src/assets/myntra.png"
import Screenshot from "/src/assets/Screenshot .png"
import {Link} from "react-router-dom"
function Project() {
  return (
    <>
     <div id="project" className='p-3 bg-[#02060c] text-white  md:px-10 lg:px-16 xl:px-20  2xl:px-32'>
        <h2 className="text-2xl pb-5">My Projects</h2>
        <h3 className='text-md font-semibold pb-5'>
            On the basic of  my front end and backend knowledge i have created a simple e commerce website 
        </h3>
        <div className="border md:flex xl:flex lg:flex 2xl:flex  p-5 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-sm shadow-xl py-10">
            <img src={myntra} alt="" className='bg-black p-10 rounded-sm'/>
            <p className=' p-2 m-auto'>Developed a simple E-Commerce website using React for FrontEnd & Spring-Boot for Backend,
            to performs the tasks like add new product to list, cart, and  buy those products, remove products,etc </p> 
            
        </div>
        <div className="border  md:flex xl:flex lg:flex 2xl:flex  p-5 my-10 md:p-5 2xl:p-10 xl:p-5 lg:p-5 rounded-sm shadow-xl ">
            <img src={Screenshot} alt="" className='  md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 bg-black  rounded-sm'/>
            <p className='p-2'>Developed a personal portfolio website using react and react router</p> 
            <Link to={"https://my-portfolio-pk1.netlify.app/"} className='px-2 border py-2 rounded-md w-fit h-fit'>Live Demo</Link>
        </div>
     </div>
    </>
  )
}

export default Project