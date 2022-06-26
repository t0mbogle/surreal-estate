import React from "react";
import {
  FaFortAwesome,
  FaBed,
  FaBath,
  FaPoundSign,
  FaPaperPlane,
} from "react-icons/fa";
import "../styles/property-card.css";

const PropertyCard = () => {
  return (
    <>
      <div className="property-card">
        <b>Property Details</b> <FaFortAwesome />
      </div>
      <div className="property-card_title">
        <b>Title</b>
      </div>
      <div className="property-card_typeCity">
        <i>Type - city</i>
      </div>
      <div className="property-card_bathroom">
        <FaBath /> Bathrooms
      </div>
      <div className="property-card_bedroom">
        <FaBed /> Bedrooms
      </div>
      <div className="property-card_price">
        <FaPoundSign /> Price
      </div>
      <div className="property-card_email">
        <FaPaperPlane />
        <a href="mailto:someone@properties.com">Email</a>
      </div>
    </>
  );
};

export default PropertyCard;
