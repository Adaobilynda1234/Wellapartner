import React from "react";
import "./wallpaper.css";
import wellapartner from "../assets/Wellapartner Dashboard (1).png";
import wallimage from "../assets/wallpaper.png";

const Wallpaper = () => {
  return (
    <div className="container">
      <div className="wallpaper">
        <img src={wellapartner} alt="" className="wellapartner-img" />
        <img src={wallimage} alt="" className="wallimage-img" />
      </div>
    </div>
  );
};

export default Wallpaper;
