import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/app/store";
import routes from "../../src/routes/routes";

const navigateTo = (path: string) => {
  const router = createMemoryRouter(routes, {
    initialEntries: [path],
  });

  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

describe("Navigation", () => {
  //App component test also
  it("should render the nav bar", () => {
    navigateTo("/");
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
    expect(links[0]).toHaveAttribute("href", "/top_headlines");
    expect(links[1]).toHaveAttribute("href", "/all");
  });

  it("should render top articles when in the Top headlines route", async () => {
    navigateTo("/top_headlines");

    expect(screen.getByText(/top/i)).toBeInTheDocument();
  });

  it("should render top articles when in the Top headlines route", async () => {
    navigateTo("/all");

    expect(screen.getByText(/all /i));
  });

  it("should render the error page", async () => {
    navigateTo("/rubbish_link");

    expect(screen.getByRole("heading")).toHaveTextContent(/sorry/i);
  });
});
