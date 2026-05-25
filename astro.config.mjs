import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/mohd_ali_portfolio/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
