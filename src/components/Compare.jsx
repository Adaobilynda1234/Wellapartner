import React from "react";
import "./compare.css";

const Compare = () => {
  return (
    <div className="container mt-3">
      <div className="compare">
        <h1>Compare plans & features</h1>
        <p className="para">
          Overview of what’s included in our different plans.
        </p>
        {/* beginning of grid */}
        <div className="container">
          <div className="row">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
