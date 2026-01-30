import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jhonathan.me",
  integrations: [tailwind(), sitemap()],
  server: { port: 4321, host: true },
  devToolbar: { enabled: false },
  vite: {
    server: {
      headers: { "Cache-Control": "no-cache, no-store, must-revalidate" },
    },
  },
});