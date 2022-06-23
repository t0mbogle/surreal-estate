import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("Navbar", () => {
  it("renders the navbar links correctly", () => {
    render(<BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const linkViewProps = screen.getByText("View Properties");
    const linkAddProp = screen.getByText("Add a Property");

    expect(linkViewProps).toBeInTheDocument();
    expect(linkAddProp).toBeInTheDocument();
  });
});
