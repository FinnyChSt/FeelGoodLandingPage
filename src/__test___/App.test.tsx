import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Test LandingPage", () => {
  test("Title is displayed", async () => {
    render(<App />);
    expect(screen.getByText("Landing Page Title")).toBeVisible();
  });
  test("Demo is displayed", async () => {
    render(<App />);
    expect(screen.getByText("This is a Demo Text")).toBeVisible();
  });
});
