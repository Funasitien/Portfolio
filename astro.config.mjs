import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [icon(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://f.dreamclouds.fr",
  base: '/Portfolio'
});
