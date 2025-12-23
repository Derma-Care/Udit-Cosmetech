import React from "react";
import "./Careers.css";

const steps = [
  {
    step: "01",
    title: "Welcome / Early Access",
    description: (
      <>
        <p><strong>Welcome to Neeha’s GlowKart Early Access!</strong> ✨</p>
        <ul>
          <li>Enter your special GlowKart code</li>
          <li>Fill your basic details</li>
          <li>Spin the wheel & win exciting rewards 🎁</li>
          <li>Share your delivery address</li>
        </ul>
        <p className="highlight">
          Your surprise gift will reach you within <strong>7 days</strong>.
        </p>
      </>
    ),
  },
  {
    step: "02",
    title: "Registration ID",
    description: (
      <>
        <p>
          Enter your <strong>NGK Registration ID</strong> in the given field.
        </p>
        <p>
          Click on <strong>Verify</strong> to continue with registration.
        </p>
      </>
    ),
  },
  {
    step: "03",
    title: "Basic Details",
    description: (
      <>
        <p>Please enter your personal details carefully:</p>
        <ul>
          <li>Full Name (as per Aadhaar)</li>
          <li>Mobile Number, Gender, DOB, City</li>
          <li>12-digit Aadhaar number</li>
          <li>Accept consent & privacy policy</li>
        </ul>
        <p className="sub-note">
          Based on your dermatology history, you will see personalized questions.
        </p>
      </>
    ),
  },
  {
    step: "04",
    title: "Verification & Spin",
    description: (
      <>
        <p>Your details are under verification.</p>
        <p>
          While verification is in progress, you can
          <strong> Spin & Win</strong> 🎉
        </p>
      </>
    ),
  },
  {
    step: "05",
    title: "Spin & Win",
    description: (
      <>
        <p>Tap the <strong>Spin</strong> button and win exciting brands:</p>
        <div className="brands">
          L’Oréal • MAC • Fenty • Sephora • Nykaa • Blue Heaven
        </div>
      </>
    ),
  },
  {
    step: "06",
    title: "Congratulations",
    description: (
      <>
        <p>🎉 Congratulations! You’ve won a premium GlowKart reward.</p>
        <p>
          Share your winning moment on
          <strong> Instagram</strong> (optional).
        </p>
      </>
    ),
  },
  {
    step: "07",
    title: "Delivery Address",
    description: (
      <>
        <p>Enter your delivery address carefully.</p>
        <p>
          You can also tap <strong>Use Location</strong> to auto-fill your address.
        </p>
      </>
    ),
  },
  {
    step: "08",
    title: "Final Success",
    description: (
      <>
        <p className="final-title">
          Welcome to Neeha’s GlowKart family! ✨
        </p>
        <p>
          Your gift will be delivered within <strong>one week</strong>.
        </p>
        <p className="launch">
          🚀 Launching on <strong>8th March 2026</strong>
        </p>
      </>
    ),
  },
];

const Careers = () => {
  return (
    <section className="glowkart-container">
      <div className="glowkart-header">
        <h1>GlowKart Early Access Journey</h1>
        <p>
          Where beauty meets care, rewards, and a glow made just for you 💖
        </p>
      </div>

      <div className="steps-wrapper">
        {steps.map((item, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{item.step}</div>
            <div className="step-content">
              <h3>{item.title}</h3>
              {item.description}
            </div>
          </div>
        ))}
      </div>

      <div className="closing-text">
        ✨ Thank you for joining Neeha’s GlowKart ✨
      </div>
    </section>
  );
};

export default Careers;
