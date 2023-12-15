import React from "react";
import "./planhero.css";

const Planhero = () => {
  return (
    <div className="container">
      <div className="pricing">
        <h1>Pricing</h1>
        <p>
          Choose a plan that suits your needs and embark on a <br /> journey of
          seamless, efficient solutions tailored just for you.
        </p>
        <div className="button-pricing">
          <div>
            <button className="month">Monthly</button>
          </div>
          <div className="yearly d-flex gap-2">
            <button className="year">Yearly </button>
            <button className="save">save up to 25%</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planhero;
