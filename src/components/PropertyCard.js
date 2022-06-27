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
        <b>Two Bed Apartment</b>
      </div>
      <div className="property-card_typeCity">
        <i>Flat - Manchester</i>
      </div>
      <div className="property-card_bathroom">
        <FaBath /> 1
      </div>
      <div className="property-card_bedroom">
        <FaBed /> 2
      </div>
      <div className="property-card_price">
        <FaPoundSign /> 750
      </div>
      <div className="property-card_email">
        <FaPaperPlane />
        <a href="mailto:someone@properties.com">Email</a>
      </div>
    </>
  );
  // *Note*, The textContext in this file may fail the test suite as the test suite has its own validProps,
  // . It will reference against, so if they are not matching they will fail. Displayed here currently to
  // display PropertyCard styling in the browser (How it would look passed props)
};

export default PropertyCard;
