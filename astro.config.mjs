// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.ghanshyamanuragi.in",
  trailingSlash: "never",
  build: { format: "file" },
  vite: { plugins: [tailwindcss()] },
  redirects: {
    "/video-gallery": "/videos",
    "/apni_rasoi": "/apni-rasoi",
  },
});
