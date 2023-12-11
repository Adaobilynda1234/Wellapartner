import React from "react";
import "./youtube.css";

const Youtube = () => {
  return (
    <div className="container mt-5">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/zV2_YPYNsXI?si=Yp5CMqYyKrNtGdbM"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
