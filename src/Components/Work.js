import React from "react";
import PickMeals from "../Assets/emptyBed.png";
import WaterTap from "../Assets/tap.png";
import WIfi from "../Assets/Wi-Fi.png";
import Kichen from "../Assets/Microwave.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Spacious Rooms",
      text: "Comfortable rooms, essential amenities, privacy, and tranquility for residents. Dedicated study areas for focused academics.",
    },
    {
      image: WIfi,
      title: "High Speed WiFi",
      text: "Seamless high-speed WiFi accessible throughout the entire building",
    },
    {
      image: WaterTap,
      title: "24/7 Water Supply",
      text: "We recognize the significance of consistent water supply and guarantee uninterrupted availability throughout the premises.",
    },
    {
      image: Kichen,
      title: "Fully Equipped Kitchen",
      text: "Additionally, we offer a fully equipped cooking area where residents can prepare their own meals.",
    }
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Eswa's Distinctive Offerings
</p>
        <h1 className="primary-heading">Amenities</h1>
        <p className="primary-text">
        Premier Amenities at Eswa
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
