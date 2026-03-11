import React from "react";
import "./About.css";
import aboutImg from "../assets/1.webp";
import missionImg from "../assets/2.webp";
import researchImg from '../assets/3.webp';
import whatwedoImg from "../assets/4.webp";
import ShareMCare from "../assets/5.webp";
import surecare from "../assets/6.webp";
import udit from '../assets/7.webp';
import project from '../assets/8.webp';
import teamTech from '../assets/9.webp';
import team from '../assets/10.webp';
import ngkVerificationImg from '../assets/NGK.jpeg'
const About = () => {
  return (
    <>
      <br />
      <br />
      {/* ABOUT SECTION */}
      <section className="about-section" id="about" style={{ marginBottom: "-50px" }}>
        <div className="about-container reverse-mobile">
          <div className="about-image">
            <img src={aboutImg} alt="Health and Cosmetic Technology" />
          </div>

          <div className="about-content">
            <h2 className="about-title" style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}>
              Revolutionizing Health and Cosmetics
            </h2>

            <p className="about-text">
              <strong style={{ display: "block", textAlign: "center" }}>
                UDIT CosmeTech Private Limited
              </strong>

              Incorporated on <strong>August 15, 2023</strong>, UDIT CosmeTech is a product
              development company specializing in the <strong>Health and Cosmetic </strong>
              domains with innovation at the heart of everything we do, we strive to develop cutting-edge
              applications that simplify lives, enhance well-being, and foster sustainable practices in healthcare and cosmetics.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title" style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}>Our Mission</h2>

            <li className="about-text">
              Our mission is to leverage technology to create meaningful, impactful solutions that address real-world
              challenges in healthcare and cosmetics. By seamlessly blending innovation and compassion, we aim to contribute
              to a healthier and more inclusive world. Our goal is to empower individuals and communities with tools that enhance
              their quality of life while ensuring accessibility and sustainability. Our goal also includes  bringing science-backed,
              high-quality, and dermatologist-approved beauty solutions to the Indian market while maintaining the authenticity of Global beauty standards.
            </li>


          </div>

          <div className="about-image">
            <img src={missionImg} alt="Research and Innovation" />
          </div>
        </div>
      </section>
      {/* RESEARCH & INNOVATION SECTION */}
      <section className="about-section">
        <div className="about-container reverse-mobile">

          <div className="about-image">
            <img src={researchImg} alt="Research and Innovation" />
          </div>

          <div className="about-content">
            <h2 className="about-title" style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}>Research & Innovation</h2>

            <ul>
              <li className="about-text">At UDIT CosmeTech, we are deeply invested in research and innovation within the cosmetic industry.
                Our team is actively exploring cutting-edge skincare formulations, advanced dermatological solutions,
                and sustainable cosmetic technologies to align with global standards. We are actively conducting research
                in the cosmetic industry to understand emerging trends, regulatory standards, and consumer preferences. Our
                focus is on aligning with global leaders in the beauty and skincare sector while exploring market potential in India.</li>
            </ul><br />

            <p className="about-text" style={{ textAlign: "center" }}>
              <strong >Key Research Areas:</strong>
            </p>

            <ul className="about-text">
              <li>
                <strong>Formulation Research: </strong>  Exploring beauty ingredients like snail mucin, fermented extracts, and Centella Asiatica,
                adapting them for Indian skin types.
              </li>
              <li>
                <strong>Diagnostic:</strong>  Developing systems for VOC (Volatile Organic Compounds) analysis and skin imaging to detect underlying
                diseases in various body organs.
              </li>
              <li>
                <strong>Cosmetic Technologies: </strong> Exploring Ultherapy & HIFU (High-Intensity Focused Ultrasound) for non-invasive skin tightening and lifting.
              </li>
              <li>
                Innovating in facial skin lifting & anti-aging solutions to enhance skin  elasticity and reduce wrinkles.
              </li>
              <li>
                <strong>Consumer Behavior Analysis:</strong>  Conducting market research to understand Indian consumer preferences and      skincare concerns.
              </li>
              <li>
                <strong>Technology Integration:</strong>  Developing AI-driven skin diagnostics and customized skincare recommendations through mobile applications.
              </li>
              <li><strong>AI-Powered Skin Analysis:</strong> Developing AI-driven applications to analyze skin conditions and provide personalized beauty recommendations.</li>
              <li><strong>Sustainable & Clean Beauty:</strong> Researching eco-friendly packaging, natural preservatives, and cruelty-free alternatives for a sustainable future.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What We Do SECTION */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title" style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}>What We Do</h2>

            <li className="about-text">
              At <strong>UDIT CosmeTech</strong> , we are actively conducting research in the cosmetic industry to understand
              emerging trends, regulatory standards, and consumer preferences. Our focus is on aligning with Global cosmetic
              standards, as well as those of other global leaders in the beauty and skincare sector. By leveraging our expertise
              in technology, market research, and product innovation, we aim to introduce Global cosmetic formulations tailored for
              Indian consumers, ensuring high efficacy and regulatory compliance. With a strong foundation in research and development,
              UDIT CosmeTech is positioned to become a pioneering force in bringing Global beauty excellence to India. By leveraging our
              research and insights, UDIT CosmeTech aims to introduce world-class cosmetic solutions tailored to Indian consumers, ensuring
              efficacy, safety, and compliance with international standards. At UDIT CosmeTech, we are actively researching these innovations
              to adapt and introduce similar cutting-edge technologies and formulations in India. Our goal is to bridge the gap between global
              excellence and the growing demand for premium skincare and beauty solutions in the Indian market.
            </li>


          </div>

          <div className="about-image">
            <img src={whatwedoImg} alt="Research and Innovation" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container reverse-mobile">

          {/* LEFT IMAGE */}
          <div className="about-image-1">
            <img src={ShareMCare} alt="Share’M’Care Application" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">

            <h2 className="about-title" style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}>
              What We Do
            </h2>

            <p className="about-text">
              At <strong>UDIT CosmeTech</strong>, we are currently working on three
              groundbreaking applications that exemplify our dedication to
              innovation and community impact.
            </p>

            <h4 className="app-title">
              1. Share’M’Care Application
            </h4>

            <p className="about-text">
              Tackling the issue of unused medications going to waste, Share’M’Care
              is a unique platform that connects donors and receivers for the
              responsible and ethical exchange of medicines. The application
              promotes sustainability and community welfare by ensuring surplus
              medications reach those who genuinely need them.
            </p>

            <ul className="about-list">
              <li>
                <strong>Key Features:</strong>
                <ul className="about-sublist">
                  <li>
                    <strong>Secure Exchanges:</strong> A reliable and ethical system for
                    sharing medicines within communities.
                  </li>
                  <li>
                    <strong>Donor and Receiver Profiles:</strong> Transparent and verified
                    profiles for enhanced trust and accountability.
                  </li>
                  <li>
                    <strong>Safety Guidelines:</strong> In-app features that educate users
                    on proper handling and exchange of medicines.
                  </li>
                  <li>
                    <strong>Sustainability Focus:</strong> Reducing medical waste to support
                    environmental sustainability.
                  </li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </section>


      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title" style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}>
              What We Do
            </h2>

            {/* RIGHT CONTENT */}
            <div className="about-content">
              <p className="about-text">
                At UDIT CosmeTech, we are currently working on two ground breaking applications that exemplify our
                dedication to innovation and community impact:
              </p>
              <h4 className="app-title">
                1. SureCare Application
              </h4>
              <p className="about-text">
                The SureCare App is designed to revolutionize nurse care and geriatric services. It provides a comprehensive
                platform that connects caregivers such as nurses, lab technicians, and doctors with individuals and families
                in need of specialized health services. From home-based elderly care to on-demand healthcare support, SureCare
                ensures personalized, professional, and compassionate care for everyone.
              </p>
              <ul className="about-list">
                <li>
                  <strong>Key Features:</strong>
                  <ul className="about-sublist">
                    <li>
                      <strong>Service Booking:</strong> A seamless interface for booking healthcare professionals based on user preferences and needs.
                    </li>
                    <li>
                      <strong>Geriatric and Home Care:</strong> Tailored solutions for elderly individuals requiring at-home medical attention.
                    </li>
                    <li>
                      <strong>Real-Time Tracking:</strong> Transparent tracking of services to ensure accountability and efficiency.
                    </li>
                    <li>
                      <strong>User-Friendly Design: </strong> Intuitive navigation and accessibility for users of all technical backgrounds.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-image ">
            <img src={surecare} alt="Research and Innovation" />
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">

            <h2
              className="about-title"
              style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}
            >
              Book Verified <span style={{ color: "#ff3b73" }}>Skin Clinics</span> Near You
            </h2>

            <p className="about-text">
              <strong>NGK</strong> connects you to <strong>verified clinics</strong> for skin procedures —
              with exclusive discounts, genuine patient reviews, and seamless appointment
              booking directly from your phone.
            </p>

            <ul className="about-list">
              <li>
                <strong>Verified Clinics</strong>
                <ul className="about-sublist">
                  <li>
                    We verify dermatology and aesthetic clinics based on qualifications,
                    hygiene standards, safety protocols, and treatment reliability.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Exclusive Discounts on Skin Procedures</strong>
                <ul className="about-sublist">
                  <li>
                    Access special discounts and offers on popular skin treatments from
                    trusted clinics near you.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Easy App Booking – Anytime, Anywhere</strong>
                <ul className="about-sublist">
                  <li>
                    Book consultations and treatments easily through the NGK platform
                    anytime from your mobile device.
                  </li>
                </ul>
              </li>
            </ul>

          </div>

          <div className="about-image">
            <img src={ngkVerificationImg} alt="NGK Verified Clinics" />
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-container reverse-mobile">

          {/* LEFT IMAGE */}
          <div className="about-image-1">
            <img src={udit} alt="Udit Application" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">

            <h2
              className="about-title"
              style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}
            >
              At UDIT Cosmetech,
            </h2>

            <p className="about-text">
              We’re not just building applications—we’re creating solutions that make a difference.
              Here’s why our approach stands out:
            </p>

            <ul className="about-list">

              <li>
                <strong>Innovative Thinking:</strong>
                <ul className="about-sublist">
                  <li>
                    Our products are designed using cutting-edge technologies to address real-world problems effectively.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Empathy-Driven Solutions:</strong>
                <ul className="about-sublist">
                  <li>
                    We develop applications that prioritize the needs and well-being of our users.
                  </li>
                </ul>
              </li>

              <li>
                <strong>High-Quality Standards:</strong>
                <ul className="about-sublist">
                  <li>
                    Every product we deliver is rigorously tested and crafted to meet industry-leading standards.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Sustainability and Community Impact:</strong>
                <ul className="about-sublist">
                  <li>
                    We focus on solutions that promote sustainability, inclusion, and a sense of community.
                  </li>
                </ul>
              </li>

            </ul>

            <p className="about-text">
              By focusing on the intersection of technology and humanity, we ensure our products
              have a lasting and meaningful impact on society.
            </p>

          </div>
        </div>
      </section>


      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title" style={{ color: "#7a7a7a", textAlign: "center", fontSize: "50px" }}>
              Join Us on Our Journey
            </h2>

            {/* RIGHT CONTENT */}
            <div className="about-content">
              <ul className="about-list">
                <ul className="about-sublist">
                  <li>
                    As we continue to expand our footprint in the Health and Cosmetic domains, we invite you to be part of our journey.
                    Whether you're a healthcare professional, a tech enthusiast, or someone looking
                    to make a positive impact, UDIT CosmeTech welcomes you to collaborate and innovate with us.</li>
                  <li>
                    Explore our applications, connect with us, and see how UDIT CosmeTech is transforming lives,
                    fostering sustainability, and building a brighter future for all.
                    Together, we can create a healthier, more connected, and inclusive world.
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="about-image ">
            <img src={team} alt="UDIT CosmeTech Team Collaboration" />
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
