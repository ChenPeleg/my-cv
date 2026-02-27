import React, { act } from "react";
import { describe, expect, test, afterEach } from "vitest";
import { createRoot } from "react-dom/client";
import { ContactInfo } from "../../src/components/ContactInfo";

describe("ContactInfo component", () => {
  let container: HTMLDivElement;

  function setup() {
    container = document.createElement("div");
    document.body.appendChild(container);
  }

  function teardown() {
    document.body.removeChild(container);
  }

  afterEach(teardown);

  test("renders heading", () => {
    setup();
    const root = createRoot(container);
    act(() => {
      root.render(<ContactInfo email="test@example.com" phone="123-456-7890" />);
    });
    expect(container.querySelector("h3")?.textContent).toBe("Contact");
    act(() => {
      root.unmount();
    });
  });

  test("renders email and phone", () => {
    setup();
    const root = createRoot(container);
    act(() => {
      root.render(<ContactInfo email="user@mail.com" phone="555-0000" />);
    });
    expect(container.textContent).toContain("user@mail.com");
    expect(container.textContent).toContain("555-0000");
    act(() => {
      root.unmount();
    });
  });
});
