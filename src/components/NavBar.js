import React from "react";
import "../styles/navbar.css";
import { FaFortAwesome } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
      <FaFortAwesome className="navbar-icon" />
      <h2>Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="url">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="url">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
