import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { HiLink, HiOfficeBuilding } from "react-icons/hi";
import { IoLogoLinkedin, IoLogoWhatsapp, IoLogoYoutube, IoMdCall } from "react-icons/io";
import { RiAppsFill } from "react-icons/ri";
import { Link } from "react-scroll";
import logo from "../images/logos/zqx2.png";

const Footer = () => {
  return (
    <div className="relative w-full pb-8 bg-[#153258] footer" id="footer">
      <div className="relative z-10 flex flex-col md:flex-row justify-between px-6 py-8 md:px-20 mt-10">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between mx-auto space-y-8 md:space-y-0">
          {/* Social Links & Contact */}
          <div className="flex-1 mx-4">
          <div className="flex gap-4">
                <a href="https://www.instagram.com/zenquix_technologies" target="_blank" aria-label="Instagram">
                  <AiFillInstagram size="30px" className="text-[#013289]" />
                </a>
                <a href="https://wa.me/919663026085" target="_blank" aria-label="WhatsApp">
                  <IoLogoWhatsapp size="30px" className="text-[#013289]" />
                </a>
                <a href="https://www.youtube.com/@zenquixtechnologies" target="_blank" aria-label="YouTube">
                  <IoLogoYoutube size="30px" className="text-[#013289]" />
                </a>
                <a href="https://www.linkedin.com/company/zenquix" target="_blank" aria-label="LinkedIn">
                  <IoLogoLinkedin size="30px" className="text-[#013289]" />
                </a>
              </div>
            <h2 className="text-[#013289] text-xl font-medium flex items-center gap-2 my-4">
              <IoMdCall /> Contact
            </h2>
            <div className="flex justify-start">
              <a href="tel:919663026085" className="text-[#013289] uppercase">+91 9663026085</a>
            </div>
            <div className="mt-4">
              <a href="mailto:Zenquixtech@gmail.com" className="text-[#013289]">Zenquixtech@gmail.com</a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex-1 mx-4">
            <h2 className="text-[#013289] text-xl font-medium flex items-center gap-2 mb-4">
              Useful Links <HiLink />
            </h2>
            <div className="flex flex-col gap-2">
              <Link to="#" className="text-[#013289] uppercase text-sm hover:text-gray-300">Home</Link>
              <Link to="/about-us" className="text-[#013289] uppercase text-sm hover:text-gray-300">About Us</Link>
              <Link to="/contact" className="text-[#013289] uppercase text-sm hover:text-gray-300">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex-1 mx-4">
            <h2 className="text-[#013289] text-xl font-medium flex items-center gap-2 mb-4">
              Services <RiAppsFill />
            </h2>
            <div className="flex flex-col gap-2">
              <Link to="/network-services" className="text-[#013289] uppercase text-sm hover:text-gray-300">Network Services</Link>
              <Link to="/cloud-services" className="text-[#013289] uppercase text-sm hover:text-gray-300">Cloud Services</Link>
              <Link to="/datacenter-services" className="text-[#013289] uppercase text-sm hover:text-gray-300">Datacenter Services</Link>
              <Link to="/end-user-services" className="text-[#013289] uppercase text-sm hover:text-gray-300">End User Services</Link>
              <Link to="/software-services" className="text-[#013289] uppercase text-sm hover:text-gray-300">Software Services</Link>
              <Link to="/consulting-services" className="text-[#013289] uppercase text-sm hover:text-gray-300">Consulting Services</Link>
              <Link to="/it-staff-augmentation" className="text-[#013289] uppercase text-sm hover:text-gray-300">IT Staff Augmentation</Link>
            </div>
          </div>

          {/* Address */}
          <div className="flex-1 mx-4">
            <h2 className="text-[#013289] text-xl font-medium flex items-center gap-2 mb-4">
              <HiOfficeBuilding /> Address
            </h2>
            <div className="flex flex-col">
              <p className="text-[#013289] uppercase text-sm mb-2">
                Corporate Office: G1, XII XIII XIV PART, VGN Krona, Madha Town Extension, Gerugambakam, Chennai – 600122, Tamilnadu
              </p>
              <p className="text-[#013289] uppercase text-sm">
              Branch office : 1383/433, 4th Floor, 5 Block HBR Layout, Service Road, Outer Ring Road, Bangalore-560045 , Karnataka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
