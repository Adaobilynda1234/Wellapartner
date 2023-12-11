import React from "react";
import "./home.css";
import Hero from "../components/Hero";
import Wallpaper from "../components/Wallpaper";
import Partner from "../components/Partner";
import Youtube from "../components/Youtube";
import Revenue from "../components/Revenue";
import Patient from "../components/Patient";
import Business from "../components/Business";

const Home = () => {
  return (
    <div>
      <Hero />
      <Wallpaper />
      <Partner />

      <h1 className="heading">About WellaPartner</h1>
      <Youtube />
      <Revenue />
      <Patient />
      <Business />
    </div>
  );
};

export default Home;
