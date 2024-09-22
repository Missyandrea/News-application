import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { QuerySection } from "../../src/Articles/components";
import { store } from "../../src/app/store";

describe("QuerySection component", () => {
  it("should render the filter description", () => {
    render(
      <Provider store={store}>
        <QuerySection />
      </Provider>
    );

    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/filter/i);
  });

  it("should render the filter elements for the top articles", () => {
    render(
      <Provider store={store}>
        <QuerySection />
      </Provider>
    );

    expect(screen.getByLabelText(/keyword/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    
  });

  it("should render the filter elements for all articles", () => {
    render(
      <Provider store={store}>
        <QuerySection visible/>
      </Provider>
    );

    expect(screen.getByLabelText(/keyword/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/language/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/from/i)).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()

  });
  
});
