import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import img2 from "../images/vectors/Cloud1.png";
import img6 from "../images/vectors/consulting.png";
import img3 from "../images/vectors/Datacenter.png";
import img4 from "../images/vectors/Endusers.png";
import img7 from "../images/vectors/Itstaff.png";
import img from "../images/vectors/Network.png";
import img5 from "../images/vectors/Software.png";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const panels = useRef([]);

  useEffect(() => {
    // ScrollTrigger setup
    let sections = panels.current;
    
    if (containerRef.current && sections.length > 0) {
      const scrollAnimation = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3500",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          invalidateOnRefresh: true,
        },
      });

      // Refresh ScrollTrigger to ensure everything is properly set up
      ScrollTrigger.refresh();

      return () => {
        scrollAnimation.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup on unmount
      };
    }
  }, []);

  const servicesData = [
    {
      img: img,
      title: "Networking Services",
      description:
        "We provide robust and secure network solutions tailored to your organization's requirements. From designing and implementing networks ...",
      link: "/services-details",
    },
    {
      img: img2,
      title: "Cloud Services",
      description:
        "Harness the power of the cloud to drive agility and scalability in your operations. Our expert team assists you in formulating a cloud strategy... ",
      link: "/cloud-services",
    },
    {
      img: img3,
      title: "Datacenter Services",
      description:
        "Entrust your critical infrastructure to our experienced team for comprehensive datacenter management. We provide end-to-end solutions, including server management",
      link: "/datacenter-services",
    },
    {
      img: img4,
      title: "End User Support",
      description:
        "Empower your workforce with reliable and efficient IT support. Our end user services cover help desk support, software installations and upgrades",
      link: "/EndUser-services",
    },
    {
      img: img5,
      title: "Software Development",
      description:
        "Transform your business with tailor-made software solutions that meet your specific requirements. Our skilled software development team brings your ideas to life, crafting custom",
      link: "/Software-services",
    },
    {
      img: img6,
      title: "Consultancy Services",
      description:
        "Benefit from our strategic IT consulting services, where we assess your current IT landscape, identify opportunities for improvement, and provide recommendations ",
      link: "/Consulting-Services",
    },
    {
      img: img7,
      title: "IT Staffing",
      description:
        "Fill critical skill gaps in your organization with our IT staff augmentation services. We provide highly skilled and experienced professionals to supplement your existing team",
      link: "/ITAugmentation",
    },
  ];

  return (
    <section id="services">
      <div
        className="flex flex-col w-full px-8 my-2 text-center lg:py-0"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <h3 className="text-5xl font-bold text-blue-900">Our Services</h3>
      </div>
      <aside className="container1 !mt-2 lg:!mt-6" ref={containerRef}>
        {servicesData.map((service, index) => (
          <div
            className="panel service-panel"
            ref={(el) => (panels.current[index] = el)}
            key={index}
          >
            <div className="service-card bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[450px] w-[300px] md:w-[350px] mx-auto flex-shrink-0">
              <img
                alt={service.title}
                className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[60%] h-[40%] mx-auto"
                src={service.img}
              />
              <h2 className="my-4 text-2xl font-semibold text-center">
                {service.title}
              </h2>
              <p className="font-medium text-md">{service.description}</p>
              <Link
                to={service.link}
                className="block mt-3 text-center text-blue-700 hover:underline hover:text-white"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
};

export default HorizontalScroll;
