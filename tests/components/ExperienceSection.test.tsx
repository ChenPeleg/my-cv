import React, { act } from "react";
import { expect, test, afterEach } from "vitest";
import { createRoot } from "react-dom/client";
import { ExperienceSection } from "../../src/components/ExperienceSection";

let container: HTMLDivElement;

function setup() {
  container = document.createElement("div");
  document.body.appendChild(container);
}

function teardown() {
  document.body.removeChild(container);
}

afterEach(teardown);

const experience = [
  { role: "Frontend Developer", period: "2021 - 2023", company: "Acme Corp", description: "Built web apps." },
  { role: "Backend Developer", period: "2023 - Present", company: "Globex", description: "Managed APIs." },
];

test("ExperienceSection renders section heading", () => {
  setup();
  const root = createRoot(container);
  act(() => {
    root.render(<ExperienceSection experience={experience} />);
  });
  expect(container.querySelector("h2")?.textContent).toBe("Experience");
  act(() => {
    root.unmount();
  });
});

test("ExperienceSection renders all experience entries", () => {
  setup();
  const root = createRoot(container);
  act(() => {
    root.render(<ExperienceSection experience={experience} />);
  });
  const headings = container.querySelectorAll("h4");
  expect(headings.length).toBe(2);
  expect(headings[0].textContent).toBe("Frontend Developer");
  expect(headings[1].textContent).toBe("Backend Developer");
  expect(container.textContent).toContain("Acme Corp");
  expect(container.textContent).toContain("Built web apps.");
  act(() => {
    root.unmount();
  });
});

test("ExperienceSection renders empty list", () => {
  setup();
  const root = createRoot(container);
  act(() => {
    root.render(<ExperienceSection experience={[]} />);
  });
  expect(container.querySelectorAll("h4").length).toBe(0);
  act(() => {
    root.unmount();
  });
});
