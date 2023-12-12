import React from "react";
import "./footer.css";
import footer from "../assets/footer.svg";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="footer d-lg-flex justify-content-between d-sm-grid">
          <div className="logo">
            <img src={footer} alt="" />
          </div>
          <div className="phone d-flex ms-2 me-2 gap-5">
            <p>contact@wellahealth.com</p>
            <p>+2349087482264</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
