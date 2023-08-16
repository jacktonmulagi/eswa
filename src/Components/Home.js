import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/hero.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Your Home Away from Home</h1>
          <p className="primary-text">
            Embark on an Extraordinary Student Journey in Nairobi: Where
            Comfortable Accommodation, Thriving Community, and Unbeatable
            Convenience Converge to Redefine Your University Experience!"
          </p>
          <button className="secondary-button">
            Book Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
