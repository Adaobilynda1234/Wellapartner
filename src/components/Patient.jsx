import React from "react";
import "./patient.css";
import patient from "../assets/patient.png";
import arrow from "../assets/arrow.svg";
import Google from "../assets/GooglePlayLogo.svg";
import clipboard from "../assets/ClipboardText.svg";
import airplay from "../assets/Airplay.svg";
import mask from "../assets/MaskHappy.svg";
import chatc from "../assets/ChatCircleText.svg";
import clip from "../assets/Clip path group.svg";

const Patient = () => {
  return (
    <div className="container mt-5">
      <div className="Patient">
        <h2 className="light">Better Patient </h2>
        <h2 className="Bold">Management & Care</h2>
        <div>
          <img
            style={{ width: 638, height: 400 }}
            src={patient}
            className="img-fluid d-block m-auto"
            alt=""
          />
        </div>
        <p className="para mb-5">
          Our platform has redefined the way you <br /> interact with patients,
          ensuring a seamless,
          <br />
          personalized, and efficient experience.
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
                  <img src={Google} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">WELLAPARTNER APP ACCESS</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Get access to wellapartner app & enjoy smooth fulfilment &
                payment flow for wellahealth requests
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={clipboard} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">PATIENT RECORDS TRACKING</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Keep track of data for your walk-in patients and leverage that
                for better and effective patient engagement.
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={airplay} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">CHRONICARE DASHBOARD </h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Monitor your chronic disease patients effectively with our easy
                to use patient dashboard and improve care outcomes
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
                  <img src={mask} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">AUTOMATED PATIENT FOLLOW UP</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Automate your patient follow up process and boost customer
                satisfaction and retention .
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={chatc} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">BULK SMS</h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Engage your pool of clients with discounts, freebies and new
                product information using via sms
              </p>
            </div>
            <div className="col-sm">
              <div className="d-flex gap-1 ">
                <div>
                  <img src={clip} alt="" />
                </div>
                <div>
                  <h5 className="grid-heading">
                    PATIENT ACCESS TO TELEMEDICINE
                  </h5>
                </div>
              </div>
              <p className="grid-paragraph">
                Give your clients access to telemedicine services right from
                your pharmacy premise and improve client satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
