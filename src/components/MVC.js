import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
            md:w-[80%]
      "
    >
      {/* <Liicon reference={ref} /> */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">{type}&nbsp;</h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-40">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl sm:text-4xl md:mb-16">Education</h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            type={"Bachelor of Engineering in Computer Science"}
            time={"2021-2024"}
            place={"P.A. College of Engineering and Technology, Pollachi"}
            info={
              "Focused on advanced software engineering, systems analysis, and project management. Completed a significant project on web application development using React and Node.js."
            }
          />
          <Details
            type={"Diploma in Mechanical Engineering"}
            time={"2018-2021"}
            place={"Nachimuthu Polytechnic College, Pollachi"}
            info={
              "Studied fundamentals of mechanical systems, including thermodynamics, fluid mechanics, and material science. Undertook a capstone project on automated mechanical systems."
            }
          />
          <Details
            type={"Secondary School Leaving Certificate"}
            time={"2017-2018"}
            place={"Government High School, Gollapatti"}
            info={
              "Acquired foundational knowledge in various subjects including mathematics, physics, and computer science. Participated in extracurricular activities related to science and technology."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;