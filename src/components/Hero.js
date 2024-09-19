import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import cloud from "../images/services/Cloud.svg";
import network from "../images/services/Network.svg";
import software from "../images/services/Software.svg";
import heroImg from '../images/web-dev.svg';

const slides = [
    {
        title: "Welcome to Zenquix Technologies Pvt Ltd",
        description: "At Zenquix Technologies, we empower businesses to thrive in the digital world through our cutting-edge IT solutions. Discover how we can drive your success and elevate your technology.",
        imgSrc: heroImg,
        link: "/#",
    },
    {
        title: "Network Services",
        description: "Stay connected and secure with our reliable network solutions. Our advanced technology ensures uninterrupted connectivity and robust security, allowing you to focus on what matters most—growing your business.",
        imgSrc: network,
        link: "/services-details",
    },
    {
        title: "Cloud Services",
        description: "Unlock the power of the cloud with our scalable and innovative solutions. Seamlessly integrate cloud technology to enhance efficiency, reduce costs, and drive digital transformation across your organization.",
        imgSrc: cloud,
        link: "/cloud-services",
    },
    {
        title: "Software Development",
        description: "Transform your business with custom software solutions tailored to your unique needs. Our expert team delivers high-quality, scalable applications designed to streamline processes and foster innovation.",
        imgSrc: software,
        link: "/Sofware-services",
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 4000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval);
    }, []);

    const { title, description, imgSrc, link } = slides[currentSlide];

    const slideVariants = {
        initial: {
            opacity: 0,
            x: 100,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.8 }
        },
        exit: {
            opacity: 0,
            x: -100,
            scale: 0.9,
            transition: { duration: 0.8 }
        },
    };

    return (
        <motion.div 
            className="relative max-h-full overflow-hidden hero" 
            id='hero'
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
        >
            <NavBar />
            
            <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-blue-900 to-transparent"></div>

            <div className="relative flex items-center justify-center h-full min-h-screen p-2 mx-4 mt-8 lg:mt-4 md:p-12">
                <AnimatePresence>
                    <motion.div 
                        className="absolute flex flex-col justify-between py-8 text-center left-10 lg:flex-row lg:text-left"
                        key={currentSlide} // Key prop to trigger the animation on slide change
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div className="flex flex-col justify-center lg:w-1/2">
                            <h1 className="self-start mb-5 text-3xl font-bold md:text-5xl text-primary">
                                {title}
                            </h1>
                            <div className="mb-5 text-xl font-semibold tracking-tight text-gray-500">
                                {description}
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to={link} className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white transition-transform transform bg-blue-900 shadow-xl hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0 hover:scale-105">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="flex w-full lg:justify-end lg:w-1/2">
                            <img alt="service img" className="rounded-t float-right w-full lg:w-[450px] lg:h-[450px] object-fill" src={imgSrc} />
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-[10%] left-[10%] w-[80%] h-0.5 bg-primary-300">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4    }} // Animate progress bar fill over 3 seconds
                        key={currentSlide} // Key prop to trigger animation on slide change
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Hero;
