import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";

test("Component renders button", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Component renders dynamic text", () => {
  render(<Button>Hello</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Hello");
});

test("Component accepts onClick events", () => {
  let i = 0;

  const increment = () => {
    i++;
  };
  render(<Button onClick={increment} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(i).toBe(1);
});

test("Button is blue by default", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: blue");
});

test("Button accepts custom color", () => {
  render(<Button backgroundColor="red" />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("backgroundColor: red");
});
