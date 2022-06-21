import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaFortAwesome } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
      <FaFortAwesome className="navbar-icon" />
      <h2>Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
