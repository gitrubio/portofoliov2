import React from "react";
//countup
import CountUp from "react-countup";
// intersection observer  -  for animation
import { useInView } from "react-intersection-observer";
// animation
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { downloadCV } from "../api/firebase";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container  mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row  lg:items-center lg:gap-x-20  lg:gap-y-0  h-screen">
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></motion.div>
          <motion.div 
           variants={fadeIn('left',0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3   mb-4">
              I'm a Freelance Full-stack Developer with over 3 years of
              experience.{" "}
            </h3>
            <p className="mb-6">
            I'm a Full Stack web developer with skills in Java, JavaScript, TypeScript, React, Node,
            Laravel, Nest, databases, and sales management systems. I excel at working
            effectively in collaborative teams and staying updated with the latest industry trends.
            I'm committed to problem-solving and creating effective solutions for our clients.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}k+
                </div>
               
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied<br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <button  className="text-gradient btn-link" onClick={downloadCV}>
                My Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
