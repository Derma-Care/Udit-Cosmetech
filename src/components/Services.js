import React from "react";
import "./Services.css";
import {
  FaCode,
  FaMobileAlt,
  FaPencilRuler,
  FaCloud,
  FaUsersCog,
  FaCogs,
  FaDatabase,
  FaProjectDiagram,
  FaRobot,
  FaHeadset,
} from "react-icons/fa";

const Services = () => {
 const services = [
  {
    icon: <FaMobileAlt />,
    title: "Healthcare Application Development",
    description:
      "We build secure and scalable healthcare platforms like SureCare that connect caregivers, medical professionals, and patients for home care, geriatric services, and on-demand medical support.",
  },
  {
    icon: <FaRobot />,
    title: "AI & Intelligent Solutions",
    description:
      "AI-powered systems for skin diagnostics, personalized skincare recommendations, automation, and data-driven decision-making in healthcare and cosmetic domains.",
  },
  {
    icon: <FaCode />,
    title: "Custom Software Engineering",
    description:
      "End-to-end product development using Java Full Stack, React, and Microservices to deliver high-performance, secure, and enterprise-ready applications.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps Engineering",
    description:
      "Cloud-native architecture, CI/CD pipelines, and DevOps automation using AWS and Azure for scalable, reliable, and resilient systems.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Cosmetic Research & Innovation",
    description:
      "Research-driven consulting focused on global cosmetic formulations, ingredient analysis, regulatory alignment, and adapting innovations for the Indian market.",
  },
];


  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="about-title" style={{ color: "#3da415" }}>
          Our <span>Services</span>
        </h2>

        <p className="services-subtitle">
          Empowering healthcare, cosmetics, and technology-driven businesses
          with innovative, research-backed, and scalable digital solutions.
        </p>

        <div className="service-cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
