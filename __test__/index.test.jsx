/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "../src/pages/index";

describe("Index should render a heading", () => {
  it("renders a heading", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
