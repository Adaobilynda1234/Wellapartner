import React from "react";
import "./details.css";
import check from "../assets/check.svg";
import bad from "../assets/blackbad.svg";

const Details = () => {
  return (
    <div className="container">
      {/* first one */}
      <div className="display">
        <div>
          <p className="mt-3">HMO Drug Refills</p>
        </div>
        <div className="image-display">
          <img src={check} alt="" />
          <img src={check} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* second one */}
      <div className="display">
        <div>
          <p className="mt-3">Handle Malaria Claims</p>
        </div>
        <div className="image-display">
          <img src={check} alt="" />
          <img src={check} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* 
      third one */}
      <div className="display">
        <div>
          <p className="mt-3">Wellapartner App Access</p>
        </div>
        <div className="image-display">
          <img src={check} alt="" />
          <img src={check} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* fourth one */}
      <div className="display">
        <div>
          <p className="mt-3">
            Drug Pick Ups for <br />
            Telemedicne
          </p>
        </div>
        <div className="image-display">
          <img src={check} className="" alt="" />
          <img src={check} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* fifth one */}
      <div className="display">
        <div>
          <p className="mt-3">Patient Records Tracking</p>
        </div>
        <div className="image-display">
          <img src={check} alt="" />
          <img src={check} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* sixth one */}
      <div className="display">
        <div>
          <p className="mt-3">Business Support/Staff Training</p>
        </div>
        <div className="image-display">
          <img src={check} alt="" />
          <img src={check} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* seventh one */}
      <div className="display">
        <div>
          <p className="mt-3">Pharmacy listing on Wella Platform</p>
        </div>
        <div className="image-display">
          <img src={check} alt="" />
          <img src={check} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* eigth one */}
      <div className="display">
        <div>
          <p className="mt-3">Patient access to telemedicine services</p>
        </div>
        <div className="image-display">
          <img src={bad} alt="" />
          <img src={check} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* ninth one */}
      <div className="display">
        <div>
          <p className="mt-3">Bulk SMS</p>
        </div>
        <div className="image-display">
          <img src={bad} alt="" />
          <img src={bad} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* tenth one */}
      <div className="display">
        <div>
          <p className="mt-3">Automated Patient Follow up</p>
        </div>
        <div className="image-display">
          <img src={bad} alt="" />
          <img src={bad} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* eleventh one */}
      <div className="display">
        <div>
          <p className="mt-3">Chronic Disease Management Dasboard</p>
        </div>
        <div className="image-display">
          <img src={bad} alt="" />
          <img src={bad} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* twelve one */}
      <div className="display">
        <div>
          <p className="mt-3">Medication Group Purchase</p>
        </div>
        <div className="image-display">
          <img src={bad} alt="" />
          <img src={bad} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* thirteen one */}
      <div className="display">
        <div>
          <p className="mt-3">Inventory Insights</p>
        </div>
        <div className="image-display">
          <img src={bad} alt="" />
          <img src={bad} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
      {/* last one */}
      <div className="display">
        <div>
          <p className="mt-3">Marketing Support</p>
        </div>
        <div className="image-display">
          <img src={bad} alt="" />
          <img src={bad} alt="" />
          <img className="image-bg" src={check} alt="" />
          <img src={check} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
