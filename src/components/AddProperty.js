import React, { useState } from "react";
import "../styles/add-property.css";
import axios from "axios";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 0,
      bathrooms: 0,
      email: "",
      price: 500,
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    // clear error or success message before every resubmit of form, i.e. no message.

    axios
      .post("https://surreal-api.herokuapp.com/api/v1/PropertyListing", fields)
      .then(() => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error, please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    // Assigns left side of : to the right side. ...fields is being replaced with new key value pairs.
    // event.target.value (new value) is assigned to event.target.name (changed field).
  };

  return (
    <div className="add-property">
      Add Property Page
      <form onSubmit={handleAddProperty} className="add-property-form">
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="add-property-label">
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              placeholder="2 Bedroom Flat"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property-label">
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Sheffield">Sheffield</option>
            </select>
          </label>
        </div>
        <div className="add-property-label">
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="add-property-label">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              id="bedrooms"
              name="bedrooms"
              type="number"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property-label">
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              id="bathrooms"
              name="bathrooms"
              type="number"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property-label">
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              name="email"
              type="email"
              placeholder="hello@email.com"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property-label">
          <label htmlFor="price">
            Price p/m £
            <input
              id="price"
              name="price"
              type="number"
              min="0.10"
              step="0.10"
              max="1000000"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button
          type="submit"
          onChange={setFields}
          className="add-property-button"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
