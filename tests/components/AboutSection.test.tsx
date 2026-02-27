import React, { act } from "react";
import { expect, test, afterEach } from "vitest";
import { createRoot } from "react-dom/client";
import { AboutSection } from "../../src/components/AboutSection";

let container: HTMLDivElement;

function setup() {
  container = document.createElement("div");
  document.body.appendChild(container);
}

function teardown() {
  document.body.removeChild(container);
}

afterEach(teardown);

test("AboutSection renders section heading", () => {
  setup();
  const root = createRoot(container);
  act(() => {
    root.render(<AboutSection greeting="Hello!" summary="I am a developer." highlights="React, TypeScript" />);
  });
  expect(container.querySelector("h2")?.textContent).toBe("About Me");
  act(() => {
    root.unmount();
  });
});

test("AboutSection renders greeting, summary and highlights", () => {
  setup();
  const root = createRoot(container);
  act(() => {
    root.render(<AboutSection greeting="Hi there" summary="Full stack dev." highlights="Node, React" />);
  });
  const strong = container.querySelector("strong");
  expect(strong?.textContent).toBe("Hi there");
  expect(container.textContent).toContain("Full stack dev.");
  expect(container.textContent).toContain("Node, React");
  act(() => {
    root.unmount();
  });
});
