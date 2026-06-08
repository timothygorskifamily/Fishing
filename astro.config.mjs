import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages setup:
// 1. For https://username.github.io/repository-name/
//    set PUBLIC_SITE_URL=https://username.github.io and PUBLIC_BASE_PATH=/repository-name
// 2. For a custom domain
//    set PUBLIC_SITE_URL=https://yourdomain.com and leave PUBLIC_BASE_PATH empty.
const site = process.env.PUBLIC_SITE_URL || "https://example.com";
const base = process.env.PUBLIC_BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  devToolbar: {
    enabled: false
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/boat/model/")
    })
  ],
  vite: {
    build: {
      // Keep room for the hidden legacy Three.js boat model route.
      chunkSizeWarningLimit: 650
    }
  }
});
