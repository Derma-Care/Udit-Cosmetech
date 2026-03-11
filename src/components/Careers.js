import React from "react";
import "./Careers.css";
import { Shield, BadgeCheck, Smartphone, Building2 } from "lucide-react";
import ngkVerificationImg from "../assets/NGK.jpeg";

const Careers = () => {
  return (
    <>
      {/* ABOUT NGK SECTION */}
      <section className="about-ngk-section">
        <div className="about-grid">

          {/* LEFT TEXT */}
          <div className="about-text">
            <p className="about-tag">ABOUT NGK</p>

            <h1 className="about-title">
              India's Premier <br />
              <span>Dermatology Booking</span> Platform
            </h1>

            <p className="about-desc">
              An integral unit of <strong>UDIT Cosmetech Pvt. Ltd.</strong> — NGK is a
              smart platform that bridges the gap between patients seeking quality skin
              care and the best verified dermatology clinics in your city.
            </p>

            <p className="about-desc">
              Whether you need a HydraFacial, laser treatment, acne procedure, or skin
              consultation — NGK finds you a certified clinic, guarantees an exclusive
              discount, and lets you book in seconds from your phone.
            </p>

            <div className="about-tags">
              <span className="tag pink">For Patients</span>
              <span className="tag green">For Clinics</span>
              <span className="tag purple">Verified</span>
              <span className="tag gold">Best Discounts</span>
            </div>

            <a
              href="https://ngkderma.uditcosmetech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="view-details-btn"
            >
              Explore NGK
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-image">
            <img src={ngkVerificationImg} alt="NGK Verified Clinics" />
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="features-grid">

          <div className="feature-card">
            <Shield className="icon green" />
            <h3>Verified Clinics Only</h3>
            <p>
              Every clinic on NGK is verified, licensed, and background-checked.
              No unqualified providers, ever.
            </p>
          </div>

          <div className="feature-card">
            <BadgeCheck className="icon pink" />
            <h3>Genuine Users</h3>
            <p>
              NGK ensures clinics receive only verified, genuine users —
              reducing no-shows and fake bookings.
            </p>
          </div>

          <div className="feature-card">
            <Smartphone className="icon purple" />
            <h3>User Mobile App</h3>
            <p>
              A beautiful, easy-to-use mobile app for users to discover clinics,
              book procedures, and track appointments.
            </p>
          </div>

          <div className="feature-card">
            <Building2 className="icon gold" />
            <h3>Clinic Web Application</h3>
            <p>
              A powerful web dashboard for clinics to manage appointments,
              view patients, track earnings, and grow their business.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Careers;