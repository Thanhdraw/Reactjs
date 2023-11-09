import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";

// import vitePluginImp from "vite-plugin-style-import";
// import vitePluginImp from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginImp.default()],
  optimizeDeps: {
    include: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/react-fontawesome",
    ],
  },
});
