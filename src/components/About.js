import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Liicon from "./Liicon";

const Details = ({ type, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
            md:w-[80%] sm:w-[90%] xs:w-full
      "
    >
      <Liicon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold text-blue-900 capitalize lg:text-2xl sm:text-xl xs:text-lg text-center">
          {type}&nbsp;
        </h3>
        <p className="w-full lg:mt-4 lg:text-slate-600 lg:text-lg lg:font-normal md:text-sm sm:text-xs xs:text-[14px] xs:mt-2 text-justify leading-relaxed">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-40">
      <div className="w-[90%] mx-auto relative lg:w-[70%] md:w-full xs:w-full">
        <motion.div
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-blue-900 origin-top dark:bg-black
                    md:w-[2px] md:left-[30px] xs:left-[15px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            type={"Who we are?"}
            info={
              "At Zenquix, our inspiration comes from the wisdom of Zen philosophy where tranquility, clarity, precision, and finesse combined with boundless energy and agility pave the path to enlightenment. In today’s VUCA world, where change is inevitable and innovation is constant, ZenQuix embraces adaptability, agility, and efficiency with elegance to meet the evolving needs of the market and clients. Our solutions are crafted with the help of our guiding principles of simplicity, mindfulness, and focusing on what truly matters – delivering exceptional outcomes that are quick and creating a meaningful impact. With Zenquix as your trusted partner, let’s embark on a transformative journey of growth and success."
            }
          />
          <Details
            type={"What we do?"}
            info={
              "At ZenQuix Technologies, we offer a comprehensive range of IT services to empower businesses with seamless technology solutions. Our expert team specializes in the following areas: Network Services, Cloud Services, Datacenter Services, Software Development, End User Services, IT Staff Augmentaion & Consulting Services."
            }
          />
          <Details
            type={"Why ZenQuix Technologies?"}
            info={
              "Choose ZenQuix Technologies as your trusted IT partner. Experience our expertise, comprehensive solutions, tailored approach, innovation-driven mindset, customer-centricity, and unwavering reliability. We are here to transform your technology landscape, optimize your IT operations, and empower your organization for success in the digital age."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default About;
