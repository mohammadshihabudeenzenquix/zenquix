import React from 'react';
import About from '../components/About';
import FlexContainer from '../components/AboutMVC';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <About/>
            <FlexContainer/>
            <Services />
            <Footer />
        </>

    )
}

export default Home;

