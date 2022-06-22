import React, { useState } from "react";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      email: "",
      price: "500",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
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
              min="10.00"
              step="10.00"
              max="2500"
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
    // Not sure if onChange is needed in button. setFields will not be used
  );
};

export default AddProperty;
