import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import { App } from "./App";

describe("App", () => {
  it("Render not found if invalid path", () => {
    const badRoute = "/bad-route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
