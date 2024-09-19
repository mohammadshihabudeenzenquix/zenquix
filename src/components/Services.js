import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import your service images
import img2 from '../images/services/Cloud.svg';
import img6 from '../images/services/Consultancy.svg';
import img3 from '../images/services/Datacenter.svg';
import img4 from '../images/services/End_User.svg';
import img7 from '../images/services/It_Staff.svg';
import img from '../images/services/Network.svg';
import img5 from '../images/services/Software.svg';

const Services = () => {
    return (
        <div id="services" className="py-12 bg-gray-100">
            <section data-aos="zoom-in-down">
                <div className="py-4 my-4">
                    <h2 className="my-2 text-3xl font-bold text-center text-blue-900 uppercase">Services</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mx-12 mt-4 text-xl font-semibold text-center text-blue-900 lg:text-2xl">
                        We are deeply committed to the growth and success of our clients.
                    </h2>
                </div>

                <div className="flex justify-center">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                        style={{ maxWidth: '1200px', width: '100%' }} // Adjust maxWidth as needed
                    >
                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}> {/* Set min/max width for cards */}
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="Networking Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <h2 className="my-4 text-2xl font-semibold text-center">Networking Services</h2>
                                <p className="font-medium text-md">
                                    We provide robust and secure network solutions tailored to your organization's requirements.
                                </p>
                                <Link to="/services-details" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="Cloud Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                <h2 className="my-2 text-2xl font-semibold text-center">Cloud Services</h2>
                                <p className="font-medium text-md">
                                    Harness the power of the cloud to drive agility and scalability in your operations.
                                </p>
                                <Link to="/cloud-services" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="Datacenter Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="my-4 text-2xl font-semibold text-center">Datacenter Services</h2>
                                <p className="font-medium text-md">
                                    Entrust your critical infrastructure to our experienced team for comprehensive datacenter management.
                                </p>
                                <Link to="/datacenter-services" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="End User Support" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                <h2 className="my-4 text-2xl font-semibold text-center">End User Support</h2>
                                <p className="font-medium text-md">
                                    Our dedicated support team ensures seamless operations for your end users.
                                </p>
                                <Link to="/EndUser-services" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="Software Development" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img5} />
                                <h2 className="my-4 text-2xl font-semibold text-center">Software Development</h2>
                                <p className="font-medium text-md">
                                    We build custom software solutions that align with your business needs.
                                </p>
                                <Link to="/Software-services" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="Consultancy Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img6} />
                                <h2 className="my-4 text-2xl font-semibold text-center">Consultancy Services</h2>
                                <p className="font-medium text-md">
                                    Our experts provide strategic insights to help you navigate your business challenges.
                                </p>
                                <Link to="/Consulting-Services" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="IT Staffing" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img7} />
                                <h2 className="my-4 text-2xl font-semibold text-center">IT Staffing</h2>
                                <p className="font-medium text-md">
                                    Find the right talent to drive your IT initiatives forward with our staffing solutions.
                                </p>
                                <Link to="/ITAugmentation" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </div>
    );
}

export default Services;
