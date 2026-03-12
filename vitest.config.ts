/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
  },
  plugins: [react(), tailwindcss()],
});
