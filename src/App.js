import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './index.css';
// All pages
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Home from './pages/Home';

import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import CloudServices from './pages/CloudServices';
import ConsultingServices from './pages/ConsultingServices';
import DatacenterServices from './pages/DatacenterServices';
import EndUserServices from './pages/EndUserServices';
import ITAugmentaion from './pages/ITAugmentaion';
import NetworkServices from './pages/NetworkServices';
import SoftwareServices from './pages/SoftwareServices';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Zenquix Technologies Pvt Ltd");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/services-details" element={<NetworkServices/>} /> 
            <Route path="/cloud-services" element={<CloudServices/>} /> 
            <Route path="/Datacenter-services" element={<DatacenterServices/>} /> 
            <Route path="/EndUser-services" element={<EndUserServices/>} /> 
            <Route path="/Sofware-services" element={<SoftwareServices/>} /> 
            <Route path="/Consulting-Services" element={<ConsultingServices/>} /> 
            <Route path="/ITAugmentation" element={<ITAugmentaion/>} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
