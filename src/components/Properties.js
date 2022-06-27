import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("https://surreal-api.herokuapp.com/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
        setAlert({ message: "Success" });
        // const { title, type, city, bathrooms, bedrooms, price, email } = getPropertyListings;
        console.log(response);
      })
      .catch((error) => {
        setAlert({ message: "Error, data could not be retrieved" });
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>Properties Page</div>
      <div className="property-listings">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
      <Alert message={alert.message} />
    </>
  );
};

export default Properties;
