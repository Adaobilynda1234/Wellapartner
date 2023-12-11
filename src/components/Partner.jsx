import React from "react";
import "./partner.css";
import Medplus from "../assets/MedPlus.svg";
import Tonia from "../assets/Tonia.svg";
import Life from "../assets/LifeStores.svg";
import Nett from "../assets/NettPharmacy.svg";
import Justrite from "../assets/Justrite.svg";
import Van from "../assets/Vanguard.svg";
import Safari from "../assets/Safari.svg";
import Novo from "../assets/Novomed.svg";
import Last from "../assets/last logo.png";

const Partner = () => {
  return (
    <div className="container">
      <div className="partner mb-5">
        <h3>We are trusted by over 2000 Pharmacies</h3>
        <p>
          This is a testament to our reliability, and unmatched
          <br />
          service in the pharmaceutical industry.
        </p>
        <div className="container mt-5 ms-5">
          <div className="row">
            <div className="col ">
              <img src={Medplus} alt="" />
            </div>
            <div className="col">
              <img src={Tonia} alt="" />
            </div>
            <div className="col ">
              <img src={Life} alt="" />
            </div>
            <div className="col ">
              <img src={Nett} alt="" />
            </div>
            <div className="col">
              <img src={Justrite} alt="" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <img src={Van} alt="" />
            </div>
            <div className="col">
              <img src={Safari} alt="" />
            </div>
            <div className="col">
              <img src={Novo} alt="" />
            </div>
            <div className="col">
              <img src={Last} alt="" className="last-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
