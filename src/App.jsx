import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Home, Pricing, Testimonial } from "./pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </div>
  );
}

export default App;
