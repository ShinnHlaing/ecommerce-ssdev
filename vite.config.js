import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Set up a server proxy confi for API requests
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
      "/images": {
        target: "http://localhost:3000",
      },
    },
  },
});
