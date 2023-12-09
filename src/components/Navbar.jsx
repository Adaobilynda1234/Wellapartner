import React, { useState } from "react";
import Logo from "../assets/Frame.png";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // useState for navigation toggle
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container">
      <nav>
        <div className="Nav__logo">
          <img src={Logo} alt="logo" />
        </div>
        {/* menu toggle */}
        <div
          className="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span>-</span>
          <span>-</span>
          <span>-</span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/testimonial">Testimonies</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li className="Nav__button">
            <NavLink to="/">Get Started</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
