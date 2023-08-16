import React from "react";
import ProfilePic from "../Assets/user.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Testimonials from Our Guests:
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        The seamless experience at Eswa made my stay memorable. I would recommend it to anyone looking for a place to stay in Nairobi.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Faith  (std @ Daystar)</h2>
      </div>
    </div>
  );
};

export default Testimonial;
