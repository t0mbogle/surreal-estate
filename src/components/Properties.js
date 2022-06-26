import React from "react";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

const Properties = () => {
  return (
    <>
      <div>Properties Page</div>
      <div className="property-listings">
        <PropertyCard />
      </div>
    </>
  );
};

export default Properties;
