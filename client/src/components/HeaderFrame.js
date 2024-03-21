import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderFrame.css";

const HeaderFrame = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header-frame">
      <div className="navbar">
        <div className="content-frame">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/logo@2x.png"
              alt="Logo"
              height="40"
              width="40"
            />
          </NavLink>
        </div>
        <button className="navbar-toggler" onClick={toggleNav}>
          <span>&#9776;</span>
        </button>
        <div className={`navbar-nav ${isNavOpen ? "open" : ""}`}>
          <NavLink className="nav-link" to="/" onClick={toggleNav}>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about" onClick={toggleNav}>
            About
          </NavLink>
          <NavLink className="nav-link" to="/service" onClick={toggleNav}>
            Services
          </NavLink>
          <NavLink className="nav-link" to="/gallery" onClick={toggleNav}>
            Gallery
          </NavLink>
          <NavLink className="nav-link" to="/contact" onClick={toggleNav}>
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/review" onClick={toggleNav}>
            Reviews
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderFrame;
