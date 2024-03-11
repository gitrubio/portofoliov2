import React from "react";
//icons
import { RiCodeView } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
//services data

const services = [
  {
    name: "Development",
    description:
      "I transform ideas into digital solutions, providing web and mobile development that combines creativity and functionality to achieve your goals.",
    icon: <RiCodeView />,
  },
  {
    name: "Server management",
    description:
      "I optimize and oversee server environments, ensuring robust performance, solid security, and a scalable infrastructure that supports your operations.",
      icon: <FaServer/>,
  },
  {
    name: "Services Support ",
    description:
      "I offer proactive and efficient technical assistance, ensuring that your systems operate seamlessly. My commitment is to provide quality technical support that keeps your business running",
      icon: <BiSupport/>,
  },
];
const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten  lg:mb-0 h-[515px]"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3  max-w-[455px] mb-16">
              I'm a Freelance Full-stack Developer with over 3 years of
              experience..
            </h3>
            <button aria-label="work" className="btn btn-sm">See my work</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="fle-1"
          >
            <div>
              {services.map((service, index) => (
                <div
                  className="border-b border-white/20  h-[146px] mb-[38px]  flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {service.name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <button
                    aria-label="service"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      {service.icon}
                    </button>
                  
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
