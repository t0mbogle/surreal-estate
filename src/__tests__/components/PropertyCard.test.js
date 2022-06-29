import React from "react";
import { render, screen } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("Property Card", () => {
  const validProps = {
    title: "Two bed flat",
    type: "Flat",
    city: "Manchester",
    bathrooms: 1,
    bedrooms: 2,
    price: 750,
    email: "hello@email.com",
  };

  it("renders property card with correct data", () => {
    const { asFragment } = render(<PropertyCard />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("checks title prop has rendered correctly", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText(/two bed flat/i).textContent).toBe("Two bed flat");
  });
  it("checks type and city props have rendered correctly", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText(/flat - manchester/i).textContent).toBe(
      "Flat - Manchester"
    );
  });
  it("checks bathrooms prop has rendered correctly", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText(/1/).textContent).toBe("1");
  });
  it("checks bedrooms prop has rendered correctly", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText(/2/).textContent).toBe("2");
  });
  it("checks price prop has rendered correctly", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText(/750/).textContent).toBe("750");
  });
  it("checks email prop has rendered correctly", () => {
    // const { getByText } = render(<PropertyCard {...validProps} />);
    const linkEl = screen.getByRole("button", { name: "email" });

    expect(linkEl).toHaveAttribute("href", "email");
    // expect(getByText("a").getAttribute("href")).toBeInTheDocument();
    // expect(getByText("email").closest("a")).toHaveAttribute("href");
    // expect(screen.getByRole("a")).toContain("email");
    // expect(getByRole(/email/i).textContent).toContain("email");
  });
});
