// Footer.jsx

import React from "react";
import { FaInstagram } from "react-icons/fa";
import "../footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <p><h2>Contact Us</h2></p>
          <p>Email: lifeonland@gmail.com</p>
          <p>Address: Mumbai, Maharashtra, India</p>
          <p>Phone: +91 99999 88888</p>
        </div>
        <div className="instagram-link">
          <a href="https://www.instagram.com/company/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
