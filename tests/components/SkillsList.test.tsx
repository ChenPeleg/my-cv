import React, { act } from "react";
import { describe, expect, test, afterEach } from "vitest";
import { createRoot } from "react-dom/client";
import { SkillsList } from "../../src/components/SkillsList";

describe("SkillsList component", () => {
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
      root.render(<SkillsList skills={["React", "TypeScript"]} />);
    });
    expect(container.querySelector("h3")?.textContent).toBe("Skills");
    act(() => {
      root.unmount();
    });
  });

  test("renders all skills", () => {
    setup();
    const root = createRoot(container);
    act(() => {
      root.render(<SkillsList skills={["React", "TypeScript", "Node.js"]} />);
    });
    const spans = container.querySelectorAll("span");
    expect(spans.length).toBe(3);
    expect(spans[0].textContent).toBe("React");
    expect(spans[1].textContent).toBe("TypeScript");
    expect(spans[2].textContent).toBe("Node.js");
    act(() => {
      root.unmount();
    });
  });

  test("renders empty skills list", () => {
    setup();
    const root = createRoot(container);
    act(() => {
      root.render(<SkillsList skills={[]} />);
    });
    expect(container.querySelectorAll("span").length).toBe(0);
    act(() => {
      root.unmount();
    });
  });
});
