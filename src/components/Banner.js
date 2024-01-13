import React from "react";
// images
import Image from "../assets/avatar.svg";
//icons
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { downloadCV } from "../api/firebase";
const Banner = () => {
  return (
    <div id="home" className="min-h-[85vh] lg:min-h-[78vh] flex  items-center">
      <div className=" container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          {/**  text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              CARLOS <span>RUBIO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4"> I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hello! I'm carlos, a systems engineer with 3 years of
              experience in frontend and backend development. My balanced
              approach creates intuitive interfaces and robust functionalities.
              Explore my portfolio to see how I turn ideas into innovative code.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href="https://w.app/dxqFS9" target="_blank" className="btn btn-lg flex items-center">Contact me</a>
              <button className="text-gradient btn-link" href="x" onClick={downloadCV}>
                My Portfolio
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                rel="noreferrer"
                href="https://www.instagram.com/itscarlos_rubio1/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="https://github.com/gitrubio" target="_blank"  rel="noreferrer">
                <FaGithub />
              </a>
              <a
              href="https://w.app/dxqFS9"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-rubio-viloria-27b328237/"
                target="_blank"
                
              >
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px]  lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
