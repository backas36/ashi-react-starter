import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";

import Home from "./Home";

describe("Home", () => {
  it("hello world", () => {
    // ARRANGE
    render(<Home />);
    // ACT

    // ASSERT, EXPECT
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello World");
  });
});
