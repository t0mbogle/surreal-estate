import React from "react";
import { FaFortAwesome, FaBed, FaBath, FaPaperPlane } from "react-icons/fa";

const PropertyCard = () => {
  return (
    <>
      <div>
        Property Card <FaFortAwesome />
      </div>
      <div className="property-card-title">title</div>
      <div className="property-card-type-city">type & city</div>
      <div className="property-card-bathroom">
        <FaBath /> bathrooms
      </div>
      <div className="property-card-bedroom">
        <FaBed /> bedrooms
      </div>
      <div className="property-card-price">price</div>
      <div className="property-card-email">
        <FaPaperPlane /> email
      </div>
    </>
  );
};

export default PropertyCard;
