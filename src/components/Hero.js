import React from "react";
import "./Hero.css";
import logo from "../assets/11.png";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">

      <div className="light one"></div>
      <div className="light two"></div>

      <div className="hero-content">
        <img src={logo} alt="Company Logo" className="hero-logo" />

        <h1 className="hero-title">
          Products & Services for <br /> <span>Life</span>
        </h1>

        <p className="hero-subtitle">
          Enabling Tech in Health and Cosmetic Arena
        </p>

      
      </div>
    </section>
  );
};

export default Hero;
