import React from "react";
import "./revenue.css";
import Dash from "../assets/Wellapartner Dashboard (2).png";
import arrow from "../assets/arrow.svg";
import Rev from "../assets/Revenue.png";
import prescri from "../assets/Prescription.svg";
import basket from "../assets/Basket.svg";
import clip from "../assets/Clip path group.svg";

const Revenue = () => {
  return (
    <div className="container mt-5">
      <div className="Revenue">
        <h2 className="fw-bold pt-1">Boost your revenue </h2>
        <h2 className="text-muted">with Wellapartner</h2>
        <div>
          <img src={Dash} className="dash" alt="" />
          <img src={Rev} className="rev" alt="" />
        </div>
        <p className="para">
          With our innovative solutions and strategic
          <br /> expertise, we empower businesses like yours
          <br /> to reach new heights of success.
        </p>
        <div className="button">
          <a href="/" className="btn">
            Get started
            <img src={arrow} alt="" />
          </a>
        </div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-sm">
              <div className="d-flex  gap-1">
                <div>
                  <img src={prescri} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">HMO DRUG REFILLS</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Supply enrollees of over 25 HMOs in Nigeria.
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={basket} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">TELEMEDICINE DRUG PICKUPS</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                List your pharmacy as a medication pick up point for
                telemedicine services
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={clip} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">HANDLE MALARIA CLAIMS</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Get paid for medications and tests provided
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
