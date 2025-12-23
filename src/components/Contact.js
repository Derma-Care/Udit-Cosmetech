import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    subscribe: false,
  });

  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});

  /* ===================== INPUT HANDLER ===================== */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // NAME → allow only alphabets & spaces
    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) return;

    // PHONE → allow only numbers
    if (name === "phone" && !/^[0-9]*$/.test(value)) return;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error while typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  /* ===================== VALIDATION ===================== */
  const validate = () => {
    const newErrors = {};

    // NAME
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]{3,}$/.test(formData.name)) {
      newErrors.name = "Name must contain only alphabets";
    }

    // EMAIL
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }


    // PHONE (optional but strict)
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    // MESSAGE
    if (!formData.notes.trim()) {
      newErrors.notes = "Message is required";
    } else if (formData.notes.length < 10) {
      newErrors.notes = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ===================== SUBMIT ===================== */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = "📩 New Contact Form Submission";

    const body = `
Hello Sowjanya,

You have received a new contact form submission through the UDIT CosmeTech website.

━━━━━━━━━━━━━━━━━━━━━━
📌 CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━
Name   : ${formData.name}
Email  : ${formData.email}
Phone  : ${formData.phone}

━━━━━━━━━━━━━━━━━━━━━━
📝 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━
${formData.notes || "No message provided"}

━━━━━━━━━━━━━━━━━━━━━━

Regards,
UDIT CosmeTech Website
Support Team
`;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=support@uditcosmetics.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");

    // RESET FORM
    setFormData({
      name: "",
      email: "",
      phone: "",
      notes: "",
      subscribe: false,
    });
    setFiles([]);
    setErrors({});
  };



  return (
    <>
      <section className="contact-page">
        <div className="contact-wrapper">

          {/* LEFT FORM */}
          <div className="contact-form-box">
            <h2>Drop us a line!</h2>

            <form onSubmit={handleSubmit} noValidate>

              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}


              <textarea
                name="notes"
                placeholder="Other notes*"
                rows="6"
                value={formData.notes}
                onChange={handleChange}
              />
              {errors.notes && <span className="error">{errors.notes}</span>}

              {/* FILE ATTACH */}
              {/* <div className="attach-row">
              <label className="attach-label">
                📎 Attach Files
                <input type="file" multiple hidden onChange={handleFileChange} />
              </label>
              <span className="attach-count">
                Attachments ({files.length})
              </span>
            </div> */}

              {/* CHECKBOX */}
              <div className="checkbox-wrapper">
                <label className="email-signup">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                  <span className="email-text">
                    Sign up for our email list for updates, promotions, and more.
                  </span>
                </label>
              </div>

              <button type="submit" className="send-btn">
                SEND MESSAGE
              </button>

              <p className="captcha-text">
                This site is protected by reCAPTCHA and the Google Privacy Policy
                and Terms of Service apply.
              </p>

            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="contact-info-box">
            <p className="info-note">
              We love our customers, so feel free to visit during normal business hours.
            </p>

            <h3>UDITCosmetech</h3>

            <p className="address">
              7/111E, Plot No. 80/1, P&K Nest, Chil SEZ IT Park Rd, Coimbatore North,
              Coimbatore, Tamil Nadu, India - 641035
            </p>

            <h4>Hours</h4>
            <p className="hours">
              Open today <strong>09:00 am – 05:00 pm</strong>
            </p>
          </div>

        </div>
        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/918688767603?text=Hello%20UDIT%20CosmeTech%20Team%20%F0%9F%91%8B%0A%0AI%E2%80%99m%20interested%20in%20your%20services%20and%20would%20like%20to%20know%20more%20details.%0APlease%20let%20me%20know%20the%20next%20steps.%0A%0AThank%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="Chat on WhatsApp"
          />
        </a>

      </section>
      <footer className="footer">
        <p>
          Copyright © {new Date().getFullYear()} UDITCosmetech - All Rights Reserved.
        </p>
        <p>Powered by UditCosmetech</p>
      </footer>
    </>
  );
};

export default Contact;
