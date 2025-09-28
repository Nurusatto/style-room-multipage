// vite.config.ts
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "./",
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/styles/helpers"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/index.scss" as *; \n`,
      },
    },
  },
});
