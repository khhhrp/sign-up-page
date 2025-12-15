import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const getHtmlInputs = () => {
  const files = fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith(".html") && !file.startsWith("_"));

  return files.reduce((inputs, file) => {
    const key = file.replace(/\.html$/, "");
    inputs[key] = resolve(__dirname, file);
    return inputs;
  }, {});
};

export default defineConfig({
  root: __dirname,
  base: "./",
  build: {
    rollupOptions: {
      input: getHtmlInputs(),
    },
    outDir: "dist",
    assetsDir: "assets",
  },
});
