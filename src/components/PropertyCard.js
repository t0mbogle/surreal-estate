import React from "react";
import PropTypes from "prop-types";
import {
  FaFortAwesome,
  FaBed,
  FaBath,
  FaPoundSign,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  city,
  bathrooms,
  bedrooms,
  price,
  email,
}) => {
  // const formattedPrice = parseInt(price, 10).toLocaleString("en-GB", {
  //   minimumFractionDigits: 2,
  //   maximumFractionDigits: 2,
  // });

  const formatPrice = Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  // eslint-disable-next-line no-var
  const newPrice = formatPrice.format(price);

  return (
    <>
      <div className="property-card">
        <b>Property Listing</b> <FaFortAwesome />
      </div>
      <div className="property-card_title">{title}</div>
      <div className="property-card_typeCity">
        {type} - {city}
      </div>
      <div className="property-card_bathroom">
        <FaBath />
        {bathrooms}
      </div>
      <div className="property-card_bedroom">
        <FaBed />
        {bedrooms}
      </div>
      <div className="property-card_price">
        <FaPoundSign />
        {newPrice}
      </div>
      <div className="property-card_email">
        <a href={`mailto:${email}`}>
          <FaEnvelope /> Contact
        </a>
      </div>
    </>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
