import React from 'react';
import Footer from "../components/Footer";
import NavBar from '../components/Navbar/NavBar';
import SoftS from '../images/software/sw2.webp';

const SoftwareServices = () => {
  return (
    <>
    <div>
      {/* NavBar Component */}
      <NavBar />
    </div>
    <div
      id="demo"
      className="flex items-center justify-center w-full py-12 mt-8 bg-white lg:py-24"
    >
      <div
        className="container px-4 mx-auto my-8 lg:px-20"
        data-aos="zoom-in"
      >
        <form id="demoProductForm">
          <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[10%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[10%]">
            <div className="flex">
              <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
              Software Services
              </h1>
            </div>
            <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16">
              <div className="flex flex-col gap-8 md:justify-start">
                <p className="mx-auto -mt-4 text-base font-normal text-black ">
                TeqInfinity offers a comprehensive range of services to cater to diverse business needs. The software development services provided by TeqInfinity include:{" "}
                </p>
                <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                  <li>Custom Software Development</li>
                  <li>Web Application Development</li>
                  <li>Mobile App Development</li>
                  <li>E-commerce Solutions</li>
                  <li>Software Integration and API Development</li>
                  <li>Cloud Application Development</li>
                  <li>Software Testing and Quality Assurance</li>
                  <li>Maintenance and Support</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
        </form>

        {/* Image Section */}
        <div className="w-full px-8 py-6 ml-auto bg-blue-100 lg:-mt-[20%] lg:w-[40%] rounded-2xl lg:ml-[60%]">
          <img src={SoftS} alt="Networking" className="rounded-2xl " />
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default SoftwareServices