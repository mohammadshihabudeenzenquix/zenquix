import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';
import net2 from '../images/network/datacenter-nw.webp';
import net1 from '../images/network/enterp-nw.webp';
import net4 from '../images/network/nw-security.webp';
import net5 from '../images/network/nw-supp.webp';
import net3 from '../images/network/sdn.webp';

const NetworkServices = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <div>
        {/* NavBar Component */}
        <NavBar/>
    </div>
    <div>

      {/* First Section */}
      <div id="demo" className="flex items-center justify-center w-full py-12 mt-8 bg-white lg:py-24">
        <div className="container px-4 mx-auto my-8 lg:px-20" data-aos="zoom-in">
          <form id="demoProductForm">
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[90%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[10%]">
              <div className="flex">
                <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                  Enterprise Networking
                </h1>
              </div>
              <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16">
                <div className="flex flex-col gap-8 md:justify-start">
                  <p className="mx-auto -mt-4 text-base font-normal text-black ">
                    Revolutionize your business connectivity with our cutting-edge enterprise networking solutions. We design,
                    deploy, and manage robust network infrastructures that
                    enable seamless communication, collaboration, and data
                    transfer within your organization. Our expertise ensures
                    high-performance networks that meet your evolving needs,
                    empowering you to drive productivity and achieve your
                    business goals.
                  </p>
                  <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                    <li>LAN</li>
                    <li>WAN</li>
                    <li>SD-WAN</li>
                    <li>Wireless</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>

          {/* Image Section */}
          <div className="w-full px-8 py-6 ml-auto bg-blue-100 lg:-mt-[20%] lg:w-[35%] rounded-2xl lg:ml-[60%]">
            <img src={net1} alt="Networking" className="rounded-2x"/>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div id="demo1" className="flex items-center justify-center w-full py-12 bg-white lg:py-24 lg:-mt-[10%]">
        <div className="container px-4 mx-auto my-8 lg:px-20" data-aos="zoom-in">
          <form >
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[90%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[25%]">
              <div className="flex">
                <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                Datacenter Networking
                </h1>
              </div>
              <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16">
                <div className="flex flex-col gap-8 md:justify-start">
                  <p className="mx-auto -mt-4 text-base text-black md:mx-0">
                  Trust us with your datacenter networking requirements and experience unparalleled reliability and efficiency. Our datacenter networking solutions encompass advanced architectures, virtualization technologies, and optimized storage and compute systems. With our expertise, you can ensure secure and scalable connectivity for your critical applications and data, enabling seamless operations and resource utilization.
                  </p>
                  <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8 lg:ml-[50%]">
                    <li>VXLAN EVPN-based Datacenter Fabric (Cisco Nexus, Arista, Juniper)</li>
                    <li>Cisco ACI Datacenter Fabric</li>
                    <li>Cumulus based VXLAN EVPN Fabric (Whitebox solution)</li>
                    <li>SDN - Cisco ACI, NFV - NSX-V and NSX-T</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>

          {/* Image Section */}
          <div className="w-full px-8 py-6 ml-auto bg-blue-100 lg:-mt-[20%] lg:w-[39%] rounded-2xl lg:ml-[10%]">
            <img src={net2} alt="Networking" className="rounded-2x" />
          </div>
        </div>
      </div>

     {/* Third Section */}
     <div id="demo" className="flex items-center justify-center w-full py-12 bg-white lg:py-24 lg:-mt-[10%]">
        <div className="container px-4 mx-auto my-8 lg:px-20" data-aos="zoom-in">
          <form >
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[90%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[10%]">
              <div className="flex">
                <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                Software Defined Networking
                </h1>
              </div>
              <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16">
                <div className="flex flex-col gap-8 md:justify-start">
                  <p className="mx-auto -mt-4 text-base text-black md:mx-0">
                  Embrace the agility and flexibility of software-defined networking to streamline your network infrastructure. Our SDN solutions centralize network control, automate provisioning, and optimize traffic flow, allowing you to adapt rapidly to changing demands. Experience enhanced network management, improved scalability, and simplified operations with our SDN expertise.
                  </p>
                  <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                    <li>SDN - Cisco ACI, VXLAN EVPN (Cisco Nexus & Arista)</li>
                    <li>NFV - NSX-V and NSX-T</li>
                    <li>SDWAN</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>

          {/* Image Section */}
          <div className="w-full px-8 py-6 ml-auto bg-blue-100 lg:-mt-[20%] lg:w-[35%] rounded-2xl lg:ml-[60%]">
            <img src={net3} alt="Networking" className="rounded-2x" />
          </div>
        </div>
      </div>
      
       {/* Forth Section */}
       <div id="demo1" className="flex items-center justify-center w-full py-12 bg-white lg:py-24 lg:-mt-[10%]">
        <div className="container px-4 mx-auto my-8 lg:px-20" data-aos="zoom-in">
          <form >
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[90%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[25%]">
              <div className="flex">
                <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                Network Security
                </h1>
              </div>
              <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16">
                <div className="flex flex-col gap-8 md:justify-start">
                  <p className="mx-auto -mt-4 text-base text-black md:mx-0">
                  Protect your network from cyber threats and safeguard your valuable data with our comprehensive network security solutions. We employ industry-leading practices to implement robust security measures, including firewalls, intrusion detection and prevention systems, encryption, and secure remote access, ensuring the confidentiality, integrity, and availability of your network resources.
                  </p>
                  <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8 lg:ml-[50%]">
                    <li>Next-Gen Firewall</li>
                    <li>Load Balancer</li>
                    <li>Proxy</li>
                    <li>Web Application Firewall (WAF)</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>

          {/* Image Section */}
          <div className="w-full px-8 py-6 ml-auto bg-blue-100 lg:-mt-[26%] lg:w-[35%] rounded-2xl lg:ml-[10%]">
            <img src={net4} alt="Networking" className='w-[100%] rounded-2x' />
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div id="demo" className="flex items-center justify-center w-full py-12 lg:-mt-[10%] bg-white lg:py-24">
        <div className="container px-4 mx-auto my-8 lg:px-20" data-aos="zoom-in">
          <form id="demoProductForm">
            <div className="w-full p-8 my-4 mr-auto bg-white shadow-2xl md:px-12 lg:w-[70%] lg:h-[90%] lg:pl-20 lg:pr-40 rounded-2xl lg:ml-[10%]">
              <div className="flex">
                <h1 className="ml-8 text-4xl font-bold text-center text-blue-900 uppercase lg:text-left">
                Network Support Services
                </h1>
              </div>
              <div className="flex flex-row-reverse flex-wrap items-start w-full gap-4 px-8 mx-auto my-10 md:flex-nowrap md:my-16">
                <div className="flex flex-col gap-8 md:justify-start">
                  <p className="mx-auto -mt-4 text-base font-normal text-black ">
                  Our dedicated network support services ensure your network operates at peak performance and remains secure and reliable. We provide proactive monitoring, troubleshooting, maintenance, and optimization services to detect and resolve network issues promptly, minimizing downtime and maximizing network efficiency.
                  </p>
                  <ul className="block mx-auto ml-4 leading-10 text-left list-none md:list-disc w-fit md:ml-8">
                    <li>Remote network monitoring</li>
                    <li>Network connectivity solutions</li>
                    <li>Scheduled system and security updates</li>
                    <li>OS upgrades</li>
                    <li>Network troubleshooting</li>
                    <li>Application patches</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>

          {/* Image Section */}
          <div className="w-full px-8 py-6 ml-auto bg-blue-100 lg:-mt-[20%] lg:w-[35%] rounded-2xl lg:ml-[60%]">
            <img src={net5} alt="Networking" className='rounded-2xl' />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NetworkServices;
