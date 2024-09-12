import React from 'react';
import geps from '../images/clients/geps.png';
import kws from '../images/clients/kws.png';
import protergia from '../images/clients/protergia.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="py-4 my-4">
                        <h2 className="my-2 text-3xl font-bold text-center text-blue-900 uppercase">Our Clients</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mx-12 mt-4 text-xl font-semibold text-center text-blue-900 lg:text-2xl">Some of our clients.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage} className= "flex justify-center w-1/6 overflow-hidden transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={kws} alt="client" />                           
                        </div>

                        <div style={clientImage} className="flex justify-center p-3 overflow-hidden transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={protergia} alt="cliet" />                            
                        </div> 

                        <div style={clientImage} className="flex justify-center p-3 overflow-hidden transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={geps} alt="client" />                            
                        </div>

                                           
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;