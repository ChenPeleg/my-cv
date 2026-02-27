import React, { act } from "react";
import { expect, test, afterEach } from "vitest";
import { createRoot } from "react-dom/client";
import { EducationSection } from "../../src/components/EducationSection";

let container: HTMLDivElement;

function setup() {
  container = document.createElement("div");
  document.body.appendChild(container);
}

function teardown() {
  document.body.removeChild(container);
}

afterEach(teardown);

const education = [
  { degree: "B.Sc. Computer Science", school: "Tech University", year: "2020" },
  { degree: "M.Sc. Software Engineering", school: "State College", year: "2022" },
];

test("EducationSection renders section heading", () => {
  setup();
  const root = createRoot(container);
  act(() => {
    root.render(<EducationSection education={education} />);
  });
  expect(container.querySelector("h2")?.textContent).toBe("Education");
  act(() => {
    root.unmount();
  });
});

test("EducationSection renders all education entries", () => {
  setup();
  const root = createRoot(container);
  act(() => {
    root.render(<EducationSection education={education} />);
  });
  const headings = container.querySelectorAll("h4");
  expect(headings.length).toBe(2);
  expect(headings[0].textContent).toBe("B.Sc. Computer Science");
  expect(headings[1].textContent).toBe("M.Sc. Software Engineering");
  expect(container.textContent).toContain("Tech University");
  expect(container.textContent).toContain("2020");
  act(() => {
    root.unmount();
  });
});

test("EducationSection renders empty list", () => {
  setup();
  const root = createRoot(container);
  act(() => {
    root.render(<EducationSection education={[]} />);
  });
  expect(container.querySelectorAll("h4").length).toBe(0);
  act(() => {
    root.unmount();
  });
});
