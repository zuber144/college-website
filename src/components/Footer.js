import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            The institute stress the core values and ethics of commitment,
            Equity, Team Spirit, Transparency, Quality and Resource Optimization
            among the students and staff.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#">Admissions</a>
          <br />
          <a href="#">Academics</a>
          <br />
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-column">
          <h3>Contact Information</h3>
          <p>
            Vidya Soudha, 29, Infantry Road, Sanjay Gandhi Nagar, Ballari -
            583104, Karnataka.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:sgpbellary@gmail.com">sgpbellary@gmail.com</a>
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/sanjaygandhipolytechnic.bellary/"
              target="_blank"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/sanjaygandhi_polytechnic?igsh=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
