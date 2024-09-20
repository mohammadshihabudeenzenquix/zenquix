import React from "react";
import { BiBullseye } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import "./AboutMVC.css"; // Assuming you place your CSS in this file

const FlexContainer = () => {
  return (
    <div className="flex-container">
      <div className="item1">
        <div className="icon">
          <BiBullseye size={50} />
        </div>
        <p className="text-lg font-bold subtitle-flex">Our Mission</p>
        {/* <div className="middle-text">
          Knox Premium<br />
          Knox Workspace<br />
          Knox Configure
        </div> */}
        <div className="footer-text">
          <p>
            At ZenQuix Technologies, our mission is to go beyond being a
            standard IT services provider. We are passionate about transforming
            businesses through technology, driving innovation, and delivering
            exceptional results.
          </p>
        </div>
        <div className="base-wrap">
          <div className="base"></div>
        </div>
      </div>

      <div className="item2">
        <div className="icon">
          <FaRegEye size={50} />
        </div>
        <p className="text-lg font-bold subtitle-flex">Our Vision</p>
        {/* <div className="middle-text">
        <p>Automatic enrollment of unlimited amount of devices</p>
        </div> */}
        <div className="footer-text">
          <p>
            ZenQuix Technologies's vision is to lead the way as a premier
            provider of comprehensive IT services, renowned for our innovative
            solutions, expertise, and unwavering commitment to our clients'
            success. We aim to drive positive transformations in businesses by
            harnessing the full potential of technology.
          </p>
        </div>
        <div className="base-wrap">
          <div className="base"></div>
        </div>
      </div>

      <div className="item">
        <div className="icon">
          <IoDiamond size={50} />
        </div>
        <p className="text-lg font-bold subtitle-flex">Core Values</p>
        {/* <div className="middle-text">
          Knox Premium<br />
          Security<br />
          Platform
        </div> */}
        <div className="footer-text">
          <p>
            At ZenQuix Technologies, our core values are the guiding principles
            that define our company. We are driven by a commitment to
            excellence, always striving to deliver the highest quality IT
            services. Integrity is at the forefront of our interactions,
            ensuring honesty, transparency, and trust in all relationships. Our
            customer focus drives us to listen attentively, understand needs
            deeply, and provide personalized solutions. Innovation is in our
            DNA, as we embrace emerging technologies and creative thinking to
            empower our clients. Collaboration fuels our success, enabling us to
            leverage diverse expertise and work together seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlexContainer;
