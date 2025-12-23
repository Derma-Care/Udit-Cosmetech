import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Products & Services for <span>Life</span>
          </h1>

          <p className="hero-subtitle">
            Enabling <strong>Technology in Health & Cosmetic Arena</strong>
          </p>

          <p className="hero-subtitle">
            <strong>UDIT CosmeTech Private Limited</strong> is a technology-driven
            product development company revolutionizing healthcare and cosmetics
            through innovation, research, and compassion. We design solutions
            that enhance well-being, simplify lives, and promote sustainability.
          </p>

          <p className="hero-subtitle">
            From <strong>AI-powered skin diagnostics</strong> and advanced
            dermatological research to impactful healthcare applications, we
            bring <strong>global standards</strong> and
            <strong> science-backed solutions</strong> to the Indian market with
            a strong focus on safety, efficacy, and trust.
          </p>

          {/* <div className="hero-buttons">
            <a  className="hero-btn primary">
              Explore Our Solutions
            </a>
            <a  className="hero-btn secondary">
              Research & Innovation
            </a>
          </div> */}

          <div className="hero-stats">
            <div>
              <span>2023</span> Incorporated
            </div>
            <div>
              <span>2+</span> Flagship Applications
            </div>
            <div>
              <span>AI + R&D</span> Core Focus
            </div>
          </div>
        </div>

        {/* Glowing Pulse Animation */}
        <div className="pulser"></div>
      </div>
    </section>
  );
};

export default Hero;
