import React from "react";
import "./hero.css";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="container">
      <div className="hero-section">
        <h1>10X your Pharmacy revenue with </h1>
        <h1 className="hero-section__coloured">Wellapartner</h1>
      </div>
      <div className="hero-section__subsection">
        <p>
          Simplify your pharmacy business and streamline your workflow
          <br /> and enhance patient care with Wellapartner
        </p>
      </div>
      <div className="button">
        <a href="/" className="btn">
          Get started <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
