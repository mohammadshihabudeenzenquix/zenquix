import React from "react";
import Footer from "../components/Footer";
import NavBar from '../components/Navbar/NavBar';
import clud1 from '../images/cloud/bg-1.webp';

const CloudServices = () => {
  return (
    <>
    <div>
        {/* NavBar Component */}
        <NavBar/>
    </div>
    <div
      id="demo"
      className="flex items-center justify-center w-full py-12 mt-8 bg-white lg:py-24"
    >
      <div className="container px-4 mx-auto my-8 lg:px-20" data-aos="zoom-in">
        <form id="demoProductForm">
          <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[10%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[10%]">
            <div className="flex">
              <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
              Cloud Platform Services (AWS, Azure, GCP)
              </h1>
            </div>
            <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16">
              <div className="flex flex-col gap-8 md:justify-start">
                <p className="mx-auto -mt-4 text-base font-normal text-black ">
                Build your Cloud Journey with TeqInifity Cloud Platform services. Our Cloud Platform Services help enhances your enterprise Cloud experience by leveraging below services:
                </p>
                <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                  <li>Cloud Infrastructure Services</li>
                  <li>Hybrid and Multi-cloud deployment</li>
                  <li>Cloud Transition & Transformation</li>
                  <li>Application Modernization</li>
                  <li>Cloud Maturity Assessment</li>
                  <li>Cloud DevOps</li>
                  <li>Cloud FinOps</li>
                  <li>Cloud Operating model</li>
                </ul>
              </div>
            </div>
          </div>
        </form>

        {/* Image Section */}
        <div className="w-full px-8 py-6 ml-auto bg-blue-100 lg:-mt-[20%] lg:w-[40%] rounded-2xl lg:ml-[60%]">
          <img src={clud1} alt="Networking" className="rounded-2xl " />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CloudServices;
