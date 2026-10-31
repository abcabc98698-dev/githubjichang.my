// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Resolve production site URL dynamically with fallback to user's custom domain
const siteUrl = process.env.SITE_URL || process.env.ASTRO_SITE || "https://githubjichang.my";

export default defineConfig({
  output: "static",
  site: siteUrl,
  trailingSlash: "never",
  build: {
    inlineStylesheets: "always",
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
});
