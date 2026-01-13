import React from "react";
import "./Careers.css";
import { FaCheckCircle } from "react-icons/fa";
const steps = [
  {
    step: "01",
    title: "Welcome / Early Access",
    content: (
      <>
        <p><strong>Welcome to Neeha’s GlowKart Early Access!</strong> ✨</p>
        <ul>
          <li>Enter your GlowKart invitation code</li>
          <li>Fill basic profile details</li>
          <li>Spin the wheel & unlock rewards 🎁</li>
          <li>Proceed to onboarding verification</li>
        </ul>
      </>
    ),
  },
  {
    step: "02",
    title: "Registration ID",
    content: (
      <>
        <p>
          Enter your unique <strong>NGK Registration ID</strong> shared during onboarding.
        </p>
        <p>Tap <strong>Verify</strong> to authenticate your early-access status.</p>
      </>
    ),
  },
  {
    step: "03",
    title: "Basic Details",
    content: (
      <>
        <p><strong>Required information:</strong></p>
        <ul>
          <li>Full Name (as per Aadhaar)</li>
          <li>Mobile Number, Gender, Date of Birth, City</li>
          <li>12-digit Aadhaar number (encrypted)</li>
          <li>Consent to privacy & dermatology assessment</li>
        </ul>
        <p className="sub-note">
          Based on dermatology history, personalized questions will appear.
        </p>
      </>
    ),
  },
  {
    step: "04",
    title: "Verification & Screening",
    content: (
      <>
        <p>Your details are undergoing dermatology compliance verification.</p>
        <p>
          While screening is in progress, you can proceed to <strong>Spin & Win</strong> 🎉
        </p>
      </>
    ),
  },
  {
    step: "05",
    title: "Spin & Win",
    content: (
      <>
        <p><strong>Unlock exclusive beauty rewards from premium brands:</strong></p>
        <div className="brand-list">
          L’Oréal • MAC • Fenty • Sephora • Nykaa • Blue Heaven
        </div>
      </>
    ),
  },
  {
    step: "06",
    title: "Congratulations",
    content: (
      <>
        <p>🎉 You have won a verified GlowKart premium reward.</p>
        <p>
          Optionally share your winning moment on <strong>Instagram</strong>.
        </p>
      </>
    ),
  },
  {
    step: "07",
    title: "Delivery Address",
    content: (
      <>
        <p>Enter your delivery address accurately for dispatch.</p>
        <p>
          You may tap <strong>Use Location</strong> to auto-detect your address.
        </p>
      </>
    ),
  },
  {
    step: "08",
    title: "Final Success",
    content: (
      <>
        <p className="final-title">Welcome to Neeha’s GlowKart Family! ✨</p>
        <p>Your reward will be delivered within <strong>7 days</strong>.</p>
        <p className="launch">🚀 Official Launch: <strong>8th March 2026</strong></p>
      </>
    ),
  },
];

const Careers = () => {
  return (
    <section className="ngk-container">

      <div className="hero">
        <h1>NGK — Dermatology Verified Beauty Ecosystem</h1>
        <p>
          Where dermatology, safety and beauty intersect to build trust, clarity and glow.
        </p>
      </div>
      <div className="ngk-about">
        <div className="container">

          <h2 className="title">About NGK</h2>

          <p className="intro">
            <strong>NGK (Neeha’s GlowKart)</strong> is India’s pioneering
            dermatology-verified skincare and aesthetics ecosystem dedicated
            to bringing clinical integrity, regulatory hygiene and transparent
            decision-making into beauty.
          </p>

          <div className="grid">

            <div className="left">
              <p className="desc">
                The ecosystem verifies multiple touchpoints of the dermatology experience,
                including practitioner qualification, clinical hygiene, medical device calibration,
                informed consent, treatment authenticity, post-care support and long-term outcomes.
              </p>

              <ul className="pillars">
                <li><FaCheckCircle /> Practitioner Qualification</li>
                <li><FaCheckCircle /> Clinic Hygiene Protocols</li>
                <li><FaCheckCircle /> Device Calibration & Safety</li>
                <li><FaCheckCircle /> Informed Consent Pathways</li>
                <li><FaCheckCircle /> Post-Care Support</li>
                <li><FaCheckCircle /> Dermatology Outcome Tracking</li>
              </ul>
            </div>

            <div className="right">
              <p className="desc">
                NGK collaborates with accredited dermatologists, aesthetic centers,
                clinical skincare brands and regulatory stakeholders to establish
                evidence-based frameworks for safe skin intervention and consumer well-being.
              </p>

              <div className="highlight">
                India’s first clinic-verified, evidence-based skin wellness ecosystem.
              </div>
            </div>

          </div>

          <p className="closing">
            Through this initiative, NGK empowers individuals to pursue beauty
            confidently, safely and intelligently — backed by medical ethics,
            clinical validation and transparent verification.
          </p>

        </div>
      </div>
      <br /><br />

      <div className="journey-header">
        <h2>GlowKart Early Access Journey</h2>
        <p>
          A verified pathway where beauty meets science, rewards and trust 💖
        </p>
      </div>

      <div className="journey-grid">
        {steps.map((item, index) => (
          <div className="journey-card" key={index}>
            <div className="badge">{item.step}</div>
            <h3>{item.title}</h3>
            <div className="content">{item.content}</div>
          </div>
        ))}
      </div>


    </section>

  );
};

export default Careers;
