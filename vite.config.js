import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";

import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
      polyfills: true,
    }),
    AutoImport({
      include: [/\.[tj]sx?$/],
      imports: ["react", "react-router-dom"],
    }),
    WindiCSS(),
  ],
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
