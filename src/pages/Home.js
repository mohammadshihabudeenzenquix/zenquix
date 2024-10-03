import React from "react";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import NavBar from "../components/Navbar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <Intro />
      <Services />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
