import React from "react";
import "./home.css";
import {
  Business,
  Faqs,
  Footer,
  Hero,
  Partner,
  Patient,
  Revenue,
  Wallpaper,
  Youtube,
} from "../components";
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
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
