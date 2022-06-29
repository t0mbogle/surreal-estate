import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        </li>
        <li>
          <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        </li>
        <li>
          <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
        </li>
        <li>
          <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
