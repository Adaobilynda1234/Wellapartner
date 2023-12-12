import React from "react";
import "./faqs.css";

const Faqs = () => {
  return (
    <div className="container">
      <div className="faq">
        <h1>Frequently Asked Questions</h1>

        <div
          className="accordion accordion-flush d-flex  flex-column align-items-center mt-5"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Who owns wellapartner?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body d-flex flex-column align-items-center">
                Wellapartner is run by Wellahealth
                <br />
                as one of their core products Wellapartner is run by Wellahealth
                <br /> as one of their core products
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How can I subscribe to the plan
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body d-flex flex-column align-items-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                quisquam ipsa?
                <br />
                Iure maiores eos omnis? Fugiat, sit. Nostrum,
                <br />
                vitae magnam aliquam cum reprehenderit omnis ea blanditiis
                libero ipsa est officiis!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Can I switch plans after paying?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body d-flex flex-column align-items-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                quisquam ipsa?
                <br />
                Iure maiores eos omnis? Fugiat, sit. Nostrum,
                <br />
                vitae magnam aliquam cum reprehenderit omnis ea blanditiis
                libero ipsa est officiis!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                How can I subscribe to the plan
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body d-flex flex-column align-items-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                quisquam ipsa?
                <br />
                Iure maiores eos omnis? Fugiat, sit. Nostrum,
                <br />
                vitae magnam aliquam cum reprehenderit omnis ea blanditiis
                libero ipsa est officiis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
