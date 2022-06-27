import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("Property Card", () => {
  const validProps = {
    title: "Two Bed Apartment",
    type: "Flat",
    city: "Manchester",
    bathrooms: 1,
    bedrooms: 2,
    price: "750",
    email: "example@email.com",
  };

  beforeEach(() => render(<PropertyCard dummyProps={validProps} />));

  it("checks title prop is rendered correctly", () => {
    const title = screen.getByText(/two bed apartment/i);

    expect(title).toHaveTextContent("Apartment");
  });
  it("checks type and city props have been rendered correctly", () => {
    const typeCity = screen.getByText(/flat - manchester/i);

    expect(typeCity).toHaveTextContent(
      `${validProps.type} - ${validProps.city}`
    );
  });
  it("checks bathrooms prop has rendered correctly", () => {
    const bathrooms = screen.getByText(/1/);

    expect(bathrooms).toHaveTextContent(1);
  });
  it("checks bedrooms prop has rendered correctly", () => {
    const bedrooms = screen.getByText(/2/);

    expect(bedrooms).toHaveTextContent(2);
  });
  it("checks price prop has rendered correctly", () => {
    const price = screen.getByText(/750/);

    expect(price).toHaveTextContent(750);
  });
  // it("checks email prop has rendered correctly", () => {
  //   const email = screen.getByText(/email/);

  //   expect(email).toHaveTextContent("Email");
  //   // expect icon to be rendered
  // });
});
