import React from "react";
import "./compare.css";
import check from "../assets/check.svg";
import white from "../assets/whitegood.svg";
import whitebad from "../assets/whitebad.svg";
import bad from "../assets/blackbad.svg";

const Compare = () => {
  return (
    <div className="container mt-3">
      <div className="compare">
        <h1>Compare plans & features</h1>
        <p className="para">
          Overview of what’s included in our different plans.
        </p>
        <div className="small-device">
          <button className="basic">Basic</button>
          <button className="basic">Standard</button>
          <button className="business">Business</button>
          <button className="basic">Premium</button>
        </div>
        {/* small device button */}
        {/* beginning of grid */}
        <div className="container">
          <div className="row">
            {/* the other container for laptop view */}
            <div className="col">
              <div className="details-desktop">
                <p>HMO Drug Refills</p>
                <p>Handle Malaria Claims</p>
                <p>Wellapartner App Access</p>
                <p>Drug Pick Ups for Telemedicne</p>
                <p>Patient Records Tracking</p>
                <p>Business Support/Staff Training</p>
                <p>Pharmacy listing on Wella Platform</p>
                <p>Patient access to telemedicine services</p>
                <p>Bulk SMS</p>
                <p>Automated Patient Follow up</p>
                <p>Chronic Disease Management Dasboard</p>
                <p>Medication Group Purchase</p>
                <p>Inventory Insights</p>
                <p>Marketing Support</p>
              </div>
            </div>
            <div className="col">
              {/* first container */}
              <div className="first-box">
                <p className="mt-3">Wellapartner Basic</p>
                <div className="d-flex">
                  <p className="amt-compare">#1000</p>
                  <p className="period-compare">/month</p>
                </div>
                {/* button */}
                <div className="mt-2">
                  <a className="cta-compare" href="">
                    Get started
                  </a>
                </div>
                {/* beginning of mark */}
                <div className="mark">
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                </div>
              </div>
            </div>
            {/* second */}
            <div className="col">
              <div className="first-box2">
                <p className="mt-3">Wellapartner Standard</p>
                <div className="d-flex">
                  <p className="amt-compare">#2500</p>
                  <p className="period-compare">/month</p>
                </div>
                {/* button */}
                <div className="mt-2">
                  <a className="cta-compare" href="">
                    Get started
                  </a>
                </div>
                {/* beginning of mark */}
                <div className="mark">
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                  <img src={bad} alt="" />
                </div>
              </div>
            </div>
            {/* third  */}
            <div className="col">
              <div className="first-box3">
                <p className=" mt-3">Wellapartner Business</p>
                <div className="d-flex">
                  <p className="amt-compare3">#5000</p>
                  <p className="period-compare3">/month</p>
                </div>
                {/* button */}
                <div className="mt-2">
                  <a className="cta-compare3" href="">
                    Get started
                  </a>
                </div>
                <div className="mark3">
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={white} alt="" />
                  <img src={whitebad} alt="" />
                  <img src={whitebad} alt="" />
                  <img src={whitebad} alt="" />
                </div>
              </div>
            </div>
            {/* fourth */}
            <div className="col">
              <div className="first-box2">
                <p className="mt-3">Wellapartner Premium</p>
                <div className="d-flex">
                  <p className="amt-compare">#7000</p>
                  <p className="period-compare">/month</p>
                </div>
                {/* button */}
                <div className="mt-2">
                  <a className="cta-compare" href="">
                    Get started
                  </a>
                </div>
                {/* beginning of mark */}
                <div className="mark">
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                  <img src={check} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
