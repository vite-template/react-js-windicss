import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    open: false,
    proxy: {},
    cors: true,
  },
  resolve: {
    alias: {
      "@": pathResolve("src"),
      views: pathResolve("src/views"),
      utils: pathResolve("src/utils"),
      style: pathResolve("src/style"),
    },
  },
});