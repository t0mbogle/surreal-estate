import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const Sidebar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    // parse current query string, ignore '?' prefix, and makes it an object.

    const newQuery = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
      // convert back to a string and append to current query
    };

    return qs.stringify(newQuery, { addQueryPrefix: true, encode: false });
    // add '?' prefix to the start, and encode: false to keep curly braces in query
  };
  // const ascending = price.sort((a, b) => a - b);
  // const descending = price.sort((a, b) => b - a);

  return (
    <div className="sidebar">
      <div className="sidebar-title">Filter results by city:</div>
      <ul className="sidebar-list">
        <li className="sidebar-list_city">
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
        <li className="sidebar-list_city">
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <li className="sidebar-list_city">
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
        <li className="sidebar-list_city">
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
      </ul>
      <div className="sidebar-title">Sort results by price:</div>
      <ul className="sidebar-list">
        <li className="sidebar-list_price">
          <Link to={buildQueryString("sort", { price: +1 })}>Ascending</Link>
        </li>
        <li className="sidebar-list_price">
          <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
        </li>
      </ul>
    </div>
  );
};
// Add clear feature to remove filtering/sorting

export default Sidebar;
