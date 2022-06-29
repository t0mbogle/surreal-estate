import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import Sidebar from "./Sidebar";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("https://surreal-api.herokuapp.com/api/v1/PropertyListing")
      .then((response) => {
        setProperties(response.data);
        setAlert({ message: "Properties successfully loaded" });
        // const { title, type, city, bathrooms, bedrooms, price, email } = getPropertyListings;
        console.log(response);
      })
      .catch((error) => {
        setAlert({ message: "Error, data could not be retrieved" });
        console.log(error);
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`https://surreal-api.herokuapp.com/api/v1/PropertyListing${search}`)
      .then((response) => setProperties(response.data))
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <>
      <Alert message={alert.message} />
      <Sidebar />
      <div className="property-listings">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Properties;
