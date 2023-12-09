import React from "react";
import "./home.css";
import Hero from "../components/Hero";
import Wallpaper from "../components/Wallpaper";

const Home = () => {
  return (
    <div>
      <Hero />

      <Wallpaper />
      <h1>home</h1>
    </div>
  );
};

export default Home;
