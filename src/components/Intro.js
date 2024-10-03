import React from 'react';
import img from '../images/Web-developer.svg';

const Intro = () => {
    return (
        <div className="w-auto p-4 m-auto md:p-12" id='about'>
            <div className="flex flex-col-reverse justify-between py-8 lg:flex-row lg:text-left" data-aos="fade-up">
                <div className="flex flex-col justify-center lg:w-1/2 lg:mx-4">
                    <img alt="card img" className="mx-auto rounded-t" src={img} />
                </div>
                <div className="flex flex-col w-full px-8 my-4 text-center lg:text-left lg:my-0 lg:w-1/2" data-aos="zoom-in" data-aos-delay="500">
                    <h3 className="text-3xl font-bold text-blue-900">About Us</h3>
                    <div className="my-6 overflow-y-auto max-h-59">
                        <p className="text-lg text-justify text-gray-600">
                            At Zenquix, our inspiration comes from the wisdom of Zen philosophy where tranquility, clarity, precision, and finesse combined with boundless energy and agility pave the path to enlightenment. In today’s VUCA world, where change is inevitable and innovation is constant, ZenQuix embraces adaptability, agility, and efficiency with elegance to meet the evolving needs of the market and clients. Our solutions are crafted with the help of our guiding principles of simplicity, mindfulness, and focusing on what truly matters – delivering exceptional outcomes that are quick and creating a meaningful impact. With Zenquix as your trusted partner, let’s embark on a transformative journey of growth and success.
                        </p>
                    </div>
                    {/* <Link to="/contact" className="inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-2xl sm:w-auto sm:mb-0 group">
                        Contact us
                        <svg className="w-4 h-4 ml-1 transition-transform duration-200 translate-x-2 group-hover:translate-x-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Intro;
