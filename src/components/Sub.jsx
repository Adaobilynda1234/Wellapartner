import React from "react";
import "./sub.css";
import star from "../assets/Star.svg";
import whitestar from "../assets/whitestar.svg";

const Sub = () => {
  return (
    <div className="container mt-5">
      <div className="subscription">
        <div className="container">
          <div className="row">
            {/* first container */}
            <div className="col">
              <div className="subscription-box1">
                <div className="star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="text mt-2">
                  <h3>WELLAPARTNER BASIC</h3>
                </div>
                <div className="money">
                  <div className="d-flex">
                    <p className="amount">#1000</p>
                    <p className="period">/month</p>
                  </div>
                  <p className="bill">Billed monthly</p>
                </div>
                {/* end of text */}
                {/* beginning of the list */}
                <div>
                  <p className="include">What’s included:</p>
                  <ul>
                    <li>Hmo Drug Refills</li>
                    <li>Handle Malaria Claims</li>
                    <li>Wellapartner App Access</li>
                    <li>Patient Records Tracking</li>
                    <li>Business Support/Staff Training</li>
                    <li>Pharmacy listing on Wella Platform</li>
                    <li>Drugs Pickups for Telemedicine</li>
                    <li>Patient access to telemedicine</li>
                  </ul>
                </div>
                {/* button */}
                <div className="mt-5">
                  <a className="cta" href="">
                    Get Wellapartner Lite
                  </a>
                </div>
              </div>
            </div>
            {/* second container */}
            <div className="col">
              <div className="subscription-box">
                <div className="star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="text mt-2">
                  <h3>WELLAPARTNER STANDARD</h3>
                </div>
                <div className="money">
                  <div className="d-flex">
                    <p className="amount">#2500</p>
                    <p className="period">/month</p>
                  </div>
                  <p className="bill">Billed monthly</p>
                </div>
                {/* end of text */}
                {/* beginning of the list */}
                <div>
                  <p className="include">Everything on Lite, plus:</p>
                  <ul>
                    <li>Drug pickups for telemedicine</li>
                  </ul>
                </div>
                {/* button */}
                <div className="second-box">
                  <a className="cta" href="">
                    Get Wellapartner Lite
                  </a>
                </div>
              </div>
            </div>

            {/* third container */}
            <div className="col">
              <div className="subscription-box3">
                <div className="star">
                  <img src={whitestar} alt="" />
                  <img src={whitestar} alt="" />
                  <img src={whitestar} alt="" />
                  <img src={whitestar} alt="" />
                  <button className="popular">most popular</button>
                </div>
                <div className="text3 mt-2">
                  <h3>WELLAPARTNER BUSINESS</h3>
                </div>
                <div className="money3">
                  <div className="d-flex">
                    <p className="amount3">#5000</p>
                    <p className="period3">/month</p>
                  </div>
                  <p className="bill3">Billed monthly</p>
                </div>
                {/* end of text */}
                {/* beginning of the list */}
                <div>
                  <p className="include3">Everything on Basic, plus:</p>
                  <ul className="ul3">
                    <li className="li3">Patient Management Portal</li>
                    <li className="li3">Bulk SMS</li>
                    <li className="li3">Automated Patient Follow Up</li>
                    <li className="li3">Chronic Disease Management Dasboard</li>
                  </ul>
                </div>
                {/* button */}
                <div className="third-box">
                  <a className="cta" href="">
                    Get Wellapartner Lite
                  </a>
                </div>
              </div>
            </div>
            {/* fourth container */}
            <div className="col">
              <div className="subscription-box">
                <div className="star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="text mt-2">
                  <h3>WELLAPARTNER PREMIUM</h3>
                </div>
                <div className="money">
                  <div className="d-flex">
                    <p className="amount">#7000</p>
                    <p className="period">/month</p>
                  </div>
                  <p className="bill">Billed monthly</p>
                </div>
                {/* end of text */}
                {/* beginning of the list */}
                <div>
                  <p className="include">Everything on Engage, plus:</p>
                  <ul>
                    <li>Medication Group Purchase</li>
                    <li>Inventory Insights</li>
                    <li>Marketing Support</li>
                  </ul>
                </div>
                {/* button */}
                <div className="fourth-box">
                  <a className="cta" href="">
                    Get Wellapartner Lite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub;
