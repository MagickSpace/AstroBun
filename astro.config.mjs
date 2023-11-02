import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    devOverlay: true
  },
  site: 'https://example.com',
  integrations: [
    react(), 
    astroI18next(), 
    tailwind({
      applyBaseStyles: false,
    }), 
    sitemap({
      i18n: {
        defaultLocale: 'uk',
        locales: {
          uk: 'uk-UA',
          en: 'en-US', 
          ru: 'ru-UA',
        },
      },
    }),
  ]
});