import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { exec } from "child_process";

export default defineConfig({
  base: "",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setup.ts"],
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "watch-cv-yaml",
      handleHotUpdate({ file, server }) {
        if (file.endsWith("cv.yaml")) {
          exec("npm run cv:yaml", (err, stdout, stderr) => {
            if (err) {
              console.error("Error processing YAML:", stderr);
            } else {
              console.log("Updated cvData.ts from cv.yaml");
            }
          });
        }
      },
    },
  ],
});
