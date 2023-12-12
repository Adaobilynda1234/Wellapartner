import React from "react";
import "./business.css";
import business from "../assets/business.png";
import arrow from "../assets/arrow.svg";
import firstaid from "../assets/FirstAid.svg";
import hands from "../assets/Hands.svg";
import clip from "../assets/Clip path group (3).svg";
import book from "../assets/Books.svg";
import address from "../assets/AddressBook.svg";
import coin from "../assets/Coins.svg";

const Business = () => {
  return (
    <div className="container">
      <div className="Business">
        <h2 className="light">Continuous Support for</h2>
        <h2 className="Bold">Business development</h2>
        <div>
          <img
            style={{ width: 638, height: 400 }}
            src={business}
            className="img-fluid d-block m-auto"
            alt=""
          />
        </div>
        <p className="para mb-5">
          Whether you are a startup or an established <br /> company, having the
          right support can make <br /> a significant difference
        </p>
        <div className="button">
          <a href="/" className="butt">
            Get started
            <img src={arrow} alt="" />
          </a>
        </div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-sm">
              <div className="d-flex  gap-1">
                <div>
                  <img src={firstaid} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">MEDICATION GROUP PURCHASE</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Get financing for medication purchase though our medication bulk
                purchase arrangement for partner pharmacies.
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={hands} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">
                    BUSINESS SUPPORT & STAFF TRAINING
                  </h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Get access to business support materials and opportunites as
                well as training to boost your staff efficiency
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={clip} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">MARKETING SUPPORT</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Get support for better community engagement through digital and
                physical channels
              </p>
            </div>
          </div>
        </div>
        {/* second grid */}
        <div className="container mt-2 ">
          <div className="row">
            <div className="col-sm">
              <div className="d-flex  gap-1">
                <div>
                  <img src={book} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">INVENTORY INSIGHTS</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Leverage pharmacy business data for your business planning from
                wellahealth's inventory and business database
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={address} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">
                    LISTING ON WELLAPARTNER PLATFORM
                  </h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Gain visibility to the wider health system and access
                opportunities by being a part of the wellahealth network
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={coin} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">SECURE BUSINESS LOANS</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Our loans provide the financial foundation you need to expand
                your services, and enhance your overall pharmacy experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
