import React from "react";
import "./hero.css";

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
          Get started{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M1 8.17432H15"
              stroke="#344054"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 1.17432L15 8.17432L8 15.1743"
              stroke="#344054"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
