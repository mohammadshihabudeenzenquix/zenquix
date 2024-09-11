import React from 'react';
import img from '../images/services/Network.svg'; 
import img2 from '../images/services/Cloud.svg';
import img3 from '../images/services/Datacenter.svg';
import img4 from '../images/services/End_User.svg';
import img5 from '../images/services/Software.svg';
import img6 from '../images/services/Consultancy.svg';
import img7 from '../images/services/It_Staff.svg';
import { Link } from 'react-router-dom';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Networking Services</h2>
                                    <p className="text-md font-medium">
                                    We provide robust and secure network solutions tailored to your organization's requirements. From designing and implementing networks to optimizing performance and ensuring network security, our experts ensure seamless connectivity and reliable communication.
                                        </p>
                                </div>
                                <div className="text-center mt-[30px]">
                                <Link to="/services-details" className="text-blue-700 hover:underline hover:text-white  ">Read More</Link>
                            </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-2 text-2xl text-center">Cloud Services</h2>
                                    <p className="text-md font-medium">
                                    Harness the power of the cloud to drive agility and scalability in your operations. Our expert team assists you in formulating a cloud strategy, seamlessly migrating your infrastructure, and managing cloud environments.</p>
                                </div>
                                <div className="text-center mt-[70px]">
                                <Link to="/services-details" className="text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Datacenter Services</h2>
                                    <p className="text-md font-medium">
                                    Entrust your critical infrastructure to our experienced team for comprehensive datacenter management. We provide end-to-end solutions, including server management, virtualization, storage optimization, and disaster recovery planning. </p>
                                </div>
                                <div className="text-center mt-8">
                                <Link to="/services-details" className="text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">End User Services</h2>
                                    <p className="text-md font-medium">
                                    Empower your workforce with reliable and efficient IT support. Our end user services cover help desk support, software installations and upgrades, device management, and user training. We prioritize user satisfaction, ensuring your employees have the tools and assistance they need to thrive. </p>
                                </div>
                                <div className="text-center mt-[10px]">
                                <Link to="/services-details" className="text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                            </div>    
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Software Services</h2>
                                    <p className="text-md font-medium">
                                    Transform your business with tailor-made software solutions that meet your specific requirements. Our skilled software development team brings your ideas to life, crafting custom                                    </p>
                                </div>
                                <div className="text-center mt-[90px]">
                                <Link to="/services-details" className="text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                            </div>    
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img6} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Consulting Services</h2>
                                    <p className="text-md font-medium">
                                    Benefit from our strategic IT consulting services, where we assess your current IT landscape, identify opportunities for improvement, and provide recommendations to align your technology investments with your business goals. </p>
                                </div>
                                <div className="text-center mt-7">
                                <Link to="/services-details" className="text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                            </div>    
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img7} />
                                    <h2 className="font-semibold my-2 text-2xl text-center ">IT Staff Augmentation</h2>
                                    <p className="text-md font-medium">
                                    Fill critical skill gaps in your organization with our IT staff augmentation services. We provide highly skilled and experienced professionals to supplement your existing team and ensure smooth project execution.</p>
                                </div>
                                <div className="text-center mt-4">
                                <Link to="/services-details" className="text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 
                            font-bold">We <span className='font-black'>Build</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    With over 10 years experience in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl  text-blue-900 font-bold">We <span className='font-black'>Collaborate</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need and simplifies various processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;