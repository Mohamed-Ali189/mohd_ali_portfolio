import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://Mohamed-Ali189.github.io",
  base: "/mohd_ali_portfolio/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
