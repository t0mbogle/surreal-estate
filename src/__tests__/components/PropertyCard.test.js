import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("Property Card", () => {
  it("checks title prop is rendered correctly", () => {
    const { getByText } = render(<PropertyCard title="Title" />);

    expect(getByText(/title/i).textContent).toBe("Title");
  });
//   it("checks type prop is rendered correctly", () => {
//     const { getByText } = render(<PropertyCard type="Flat" />);

//     expect(getByText("Flat").textContent).toBe("Flat");
//   });
});

// Testing dummy props pass the tests for PropertyCard component...
// it("city prop is rendered correctly"
// it("bathrooms prop is rendered correctly"
// it("bedrooms prop is rendered correctly"
// it("price prop is rendered correctly"
// it("email prop is rendered correctly"
