import React from "react";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/sputify.webp";
import Img2 from "../assets/ecomerce.png";
import Img3 from "../assets/modern.png";
//icons
import { SiTailwindcss, SiRedux ,SiTypescript, SiFramer   } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/**  text */}
            <div>
              <h2 className="h2  leading-tight text-accent">
                {" "}
                My lastest <br /> Work.
              </h2>
              <p className="max-w-sm mb-4">
              Welcome to the projects section, I've had the privilege of working on various projects that not only challenge my technical skills but also reflect my passion for creating innovative solutions. 
             
              </p>
              <button aria-label="projects" className="btn btn-sm">View all projects</button>
            </div>
            {/**  image */}
            <a href="https://ecomerce-k9rl.onrender.com" target='_blank' rel="noreferrer"  className="group relative overflow-hidden border-2 border-white/50  rouderd-xl rounded-2xl">
              {/**  overloy */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/**  image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 h-[315px] w-[600px] object-cover"
                src={Img2}
                alt=""
              />
              {/**  pretitle */}
              <div className="absolute  -bottom-full left-12 group-hover:bottom-24 transition-all duration-500  z-50">
                <span className="text-gradient">e-comerce</span>
              </div>
              {/**  title */}
              <div className="absolute  -bottom-full left-12 group-hover:bottom-14 transition-all duration-700  z-50">
                <span className="text-3xl text-white">Next-comerce</span>
              </div>
              <div className="absolute flex flex-row bottom-8  left-96 group-hover:-bottom-full transition-all duration-700  z-50 text-black">
                <FaReact className="mr-3" size={30}/>
                <SiTailwindcss className="mr-3" size={30}/>
                <SiRedux className="mr-3" size={30}/>
                <IoLogoJavascript className="mr-3" size={30}/>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex  flex-col gap-y-6"
          >
            <a href="https://sputify.onrender.com/" target='_blank' rel="noreferrer"  className="group relative overflow-hidden border-2 border-white/50  rouderd-xl rounded-2xl">
              {/**  overloy */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/**  image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 h-[315px] w-[600px] object-cover"
                src={Img1}
                alt=""
              />
              {/**  pretitle */}
              <div className="absolute  -bottom-full left-12 group-hover:bottom-24 transition-all duration-500  z-50">
                <span className="text-gradient">APP WEB</span>
              </div>
              {/**  title */}
              <div className="absolute  -bottom-full left-12 group-hover:bottom-14 transition-all duration-700  z-50">
                <span className="text-3xl text-white">Sputify</span>
              </div>
              <div className="absolute flex flex-row bottom-8  left-96 group-hover:-bottom-full transition-all duration-700  z-50">
                <FaReact className="mr-3" size={30}/>
                <SiTailwindcss className="mr-3" size={30}/>
                <SiRedux className="mr-3" size={30}/>
                <IoLogoJavascript className="mr-3" size={30}/>
              </div>
            </a>
            <a  href="https://hoobank-c2lj.onrender.com" target='_blank' rel="noreferrer"  className="group relative overflow-hidden border-2 border-white/50  rouderd-xl rounded-2xl">
              {/**  overloy */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/**  image */}
              <img
                className="group-hover:scale-125 transition-all duration-500 h-[315px] w-[600px] object-cover"
                src={Img3}
                alt=""
              />
              {/**  pretitle */}
              <div className="absolute  -bottom-full left-12 group-hover:bottom-24 transition-all duration-500  z-50">
                <span className="text-gradient">UI/UX Desing</span>
              </div>
              {/**  title */}
              <div className="absolute  -bottom-full left-12 group-hover:bottom-14 transition-all duration-700  z-50">
                <span className="text-3xl text-white">Modern landing page</span>
              </div>
              <div className="absolute flex flex-row bottom-8  left-96 group-hover:-bottom-full transition-all duration-700  z-50">
                <FaReact className="mr-3" size={30}/>
                <SiTailwindcss className="mr-3" size={30}/>
                <SiFramer  className="mr-3" size={30}/>
                <SiTypescript className="mr-3" size={30}/>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
