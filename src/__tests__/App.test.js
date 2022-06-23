import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

it("renders Surreal Estate heading text", () => {
  render(<BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
