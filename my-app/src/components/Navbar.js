import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200"
          alt="profile"
          className="profile-img"
        />
        <h2>Shanny Sharma</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <button className="btn">Hire Me</button>
    </nav>
  );
}

export default Navbar;