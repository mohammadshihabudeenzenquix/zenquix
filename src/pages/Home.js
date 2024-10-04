import React from "react";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import NavBar from "../components/Navbar/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
