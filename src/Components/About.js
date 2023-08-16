import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" height={100} width={650} />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About us</p>
        <h1 className="primary-heading">
          Behind the Scenes: Where Comfort and Learning Converge
        </h1>
        <p className="primary-text">
        Secure haven in Nyayo Highrise Estate, offering comfortable accommodation for female students from Nairobi's institutions.
        </p>
        <p className="primary-text">
        Blend of convenience and community support, fostering focused studying for enhanced academic journeys. Join us today!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
