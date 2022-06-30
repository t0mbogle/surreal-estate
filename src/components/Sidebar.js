import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Filter results by city:</div>
      <ul className="sidebar-list">
        <li className="sidebar-list_city">
          <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        </li>
        <li className="sidebar-list_city">
          <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        </li>
        <li className="sidebar-list_city">
          <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
        </li>
        <li className="sidebar-list_city">
          <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
        </li>
      </ul>
    </div>
  );
};
// Add clear feature to remove filtering

export default Sidebar;
