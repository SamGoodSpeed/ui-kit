import { render, screen } from "@testing-library/react";
import Button from "./Button";
describe("Button", () => {
  it("should render correctly", () => {
    render(<Button label="Click me" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });
});
