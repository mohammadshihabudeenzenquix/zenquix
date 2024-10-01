import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import your service images
import img6 from '../images/services/Consultancy.svg';
import img7 from '../images/services/It_Staff.svg';
import img2 from '../images/vectors/Cloud1.png';
import img3 from '../images/vectors/Datacenter.png';
import img4 from '../images/vectors/Endusers.png';
import img from '../images/vectors/Network.png';
import img5 from '../images/vectors/Software.png';

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
                                <img alt="Networking Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[60%] h-[40%] ml-16" src={img} />
                                <h2 className="my-10 text-2xl font-semibold text-center">Networking Services</h2>
                                <p className="font-medium text-md">
                                We provide robust and secure network solutions tailored to your organization's requirements. From designing and implementing networks to optimizing performance and ensuring network security, our experts ensure seamless connectivity and reliable communication.                                </p>
                                <Link to="/services-details" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="Cloud Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[60%] h-[40%] ml-16" src={img2} />
                                <h2 className="my-10 text-2xl font-semibold text-center">Cloud Services</h2>
                                <p className="font-medium text-md">
                                Harness the power of the cloud to drive agility and scalability in your operations. Our expert team assists you in formulating a cloud strategy, seamlessly migrating your infrastructure, and managing cloud environments.                                 </p>
                                <Link to="/cloud-services" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="Datacenter Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[80%] h-[50%] ml-10" src={img3} />
                                <h2 className="my-0 text-2xl font-semibold text-center">Datacenter Services</h2>
                                <p className="mt-4 font-medium text-md">
                                Entrust your critical infrastructure to our experienced team for comprehensive datacenter management. We provide end-to-end solutions, including server management, virtualization, storage optimization, and disaster recovery planning.                                </p>
                                <Link to="/datacenter-services" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="End User Support" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[60%] h-[50%] ml-16" src={img4} />
                                <h2 className="my-4 text-2xl font-semibold text-center">End User Support</h2>
                                <p className="font-medium text-md">
                                Empower your workforce with reliable and efficient IT support. Our end user services cover help desk support, software installations and upgrades, device management, and user training.</p>
                                <Link to="/EndUser-services" className="block mt-3 text-center text-blue-700 hover:underline hover:text-white">Read More</Link>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide style={{ minWidth: '300px', maxWidth: '400px' }}>
                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group h-[600px]">
                                <img alt="Software Development" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out w-[70%] h-[50%] ml-16" src={img5} />
                                <h2 className="my-4 text-2xl font-semibold text-center">Software Development</h2>
                                <p className="font-medium text-md">
                                Transform your business with tailor-made software solutions that meet your specific requirements. Our skilled software development team brings your ideas to life, crafting custom                                </p>
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
