import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders Surreal Estate heading text", () => {
  render(<App />);
  const linkElement = screen.getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
