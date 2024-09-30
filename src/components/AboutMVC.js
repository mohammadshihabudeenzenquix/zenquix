import React from "react";
import { BiBullseye } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import "./FlexContainer.css"; // Reference the CSS file

const FlexContainer = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="iconWrapper">
          <BiBullseye className="iconWrapper1" />
        </div>
        <div className="cardContent">
          <h2>Our Mission</h2>
          <p className="content">
            At ZenQuix Technologies, our mission is to go beyond being a
            standard IT services provider. We are passionate about transforming
            businesses through technology, driving innovation, and delivering
            exceptional results.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="iconWrapper">
          <FaRegEye className="iconWrapper1" />
        </div>
        <div className="cardContent">
          <h2>Our Vision</h2>
          <p className="content">
            ZenQuix Technologies's vision is to lead the way as a premier
            provider of comprehensive IT services, renowned for our innovative
            solutions, expertise, and unwavering commitment to our clients'
            success. We aim to drive positive transformations in businesses by
            harnessing the full potential of technology.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="iconWrapper ">
          <IoDiamond className="iconWrapper1" />
        </div>
        <div className="cardContent mt-20">
          <h2>Core Values</h2>
          <p className="content ">
            At ZenQuix Technologies, our core values are the guiding principles
            that define our company. We are driven by a commitment to
            excellence, always striving to deliver the highest quality IT
            services. Integrity is at the forefront of our interactions,
            ensuring honesty, transparency, and trust in all relationships. Our
            customer focus drives us to listen attentively, understand needs
            deeply, and provide personalized solutions. Innovation is in our
            DNA, as we embrace emerging technologies and creative thinking to
            empower our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlexContainer;
