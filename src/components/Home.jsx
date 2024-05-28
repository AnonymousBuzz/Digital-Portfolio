import React from "react"

import pic from "../../public/photo.avif"

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
    <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 ">
        <span className="text-xl">Welcome To My Feed</span>
        <div className="flex space-x-1 text-2xl md:text-4xl">
        <h1>Hello, I'm a</h1>
        {/* <span className="text-red-700 font-bold">Developer</span> */}
        <ReactTyped
         className="text-red-700 font-bold"
         strings={["Developer" , "Designer" , "Coder"]}
          typeSpeed={40}
          backspeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className="text-sm md:text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloribus expedita cupiditate illo blanditiis culpa officia optio incidunt voluptatem nemo, assumenda eum ratione doloremque quaerat nesciunt impedit aperiam error commodi!</p>
        <br />
    


    {/* Sociaal Media icons */}
    <div className="flex justify-between">
    <div className="space-y-2">
        <h1 className="font-bold">Available On</h1>
        <ul className="flex space-x-5">
            <li><FaFacebookSquare className="text-2xl cursor-pointer" /></li>
            <li><FaLinkedin className="text-2xl cursor-pointer" /></li>
            <li><FaInstagramSquare className="text-2xl cursor-pointer" /></li>
            <li><FaTwitter className="text-2xl cursor-pointer" /></li>
        </ul>
        

    </div>
    <div className="space-y-2">
    <h1 className="font-bold">Currently Working On</h1>
       <div className="flex space-x-5">
       <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
       <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
       <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
       <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
       </div>
    </div>
    </div>
    </div>
       <div className="md:w-1/2 md:ml-48 md:mt-16 ">
        <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt=""/>
       </div>
    </div>
    </div>
    
  );
}

export default Home;
