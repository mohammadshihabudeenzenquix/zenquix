import React from 'react';
import FlexContainer from '../components/AboutMVC';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Education from '../components/MVC';
import Services from '../components/Services';



const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
           <Education/>
            <FlexContainer/>
            <Services />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

