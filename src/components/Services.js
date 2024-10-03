import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import './Services.css';  // Ensure this file has relevant styles

// Import service images
import img6 from '../images/services/Consultancy.svg';
import img7 from '../images/services/It_Staff.svg';
import img2 from '../images/vectors/Cloud1.png';
import img3 from '../images/vectors/Datacenter.png';
import img4 from '../images/vectors/Endusers.png';
import img from '../images/vectors/Network.png';
import img5 from '../images/vectors/Software.png';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const panels = useRef([]);

  useEffect(() => {
    let sections = panels.current;
    // Center the container on load

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: "+=3500",
      }
    });
  }, []);

  const servicesData = [
    { img: img, title: "Networking Services", description: "We provide robust and secure network solutions tailored to your organization's requirements...", link: "/services-details" },
    { img: img2, title: "Cloud Services", description: "Harness the power of the cloud to drive agility and scalability in your operations...", link: "/cloud-services" },
    { img: img3, title: "Datacenter Services", description: "Entrust your critical infrastructure to our experienced team for comprehensive datacenter management...", link: "/datacenter-services" },
    { img: img4, title: "End User Support", description: "Empower your workforce with reliable and efficient IT support...", link: "/EndUser-services" },
    { img: img5, title: "Software Development", description: "Transform your business with tailor-made software solutions that meet your specific requirements...", link: "/Software-services" },
    { img: img6, title: "Consultancy Services", description: "Our experts provide strategic insights to help you navigate your business challenges.", link: "/Consulting-Services" },
    { img: img7, title: "IT Staffing", description: "Find the right talent to drive your IT initiatives forward with our staffing solutions.", link: "/ITAugmentation" }
  ];

  return (
    <section className="container1 !mt-6" ref={containerRef} id="services">
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
            <h2 className="my-4 text-2xl font-semibold text-center">{service.title}</h2>
            <p className="font-medium text-md">{service.description}</p>
            <Link to={service.link} className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HorizontalScroll;
