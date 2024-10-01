import React, { useEffect } from 'react';
import Footer from "../components/Footer";
import NavBar from '../components/Navbar/NavBar';

const ConsultingServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[98%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[15%]">
            <div className="flex">
              <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
              Consulting Services
              </h1>
            </div>
            <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16">
              <div className="flex flex-col gap-8 md:justify-start">
                <p className="mx-auto -mt-4 text-base font-normal text-black ">
                Benefit from our strategic IT consulting services, where we assess your current IT landscape, identify opportunities for improvement, and provide recommendations to align your technology investments with your business goals. Our expert consultants guide you in making informed decisions and implementing effective IT strategies.                </p>
                <h3 className="ml-8 text-xl font-bold text-center text-blue-900 uppercase lg:text-left lg:-ml-0">
                Network Services:
              </h3>
                <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                  <li>Network Design and Architecture</li>
                  <li>Network Assesement and Audit</li>
                  <li>Network Optimization and Performance Tuning</li>
                  <li>Network Security Consulting</li>
                  <li>Network Design and Architecture</li>
                  <li>Network Documentation and Documentation Management</li>
                </ul>

                <h3 className="ml-8 text-xl font-bold text-center text-blue-900 uppercase lg:text-left lg:-ml-0">
                Datacenter Services:
              </h3>
                <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                  <li>Datacenter Planning and Design</li>
                  <li>Datacenter Migration and Consolidation</li>
                  <li>Datacenter Virtualization</li>
                  <li>Datacenter Security and Compliance</li>

                </ul>

                <h3 className="ml-8 text-xl font-bold text-center text-blue-900 uppercase lg:text-left lg:-ml-0">
                Cloud Services:
              </h3>
                <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                  <li>Cloud Strategy and Roadmap</li>
                  <li>Cloud Migration and Deployment</li>
                  <li>Cloud Optimization and Management</li>
                  <li>Multi-Cloud and Hybrid Cloud Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default ConsultingServices