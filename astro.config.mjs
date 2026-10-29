// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If you buy bhavanadurgam.com later, change `site` to 'https://bhavanadurgam.com'
// and add public/CNAME (see README).
export default defineConfig({
  site: 'https://bhavanadurgam.github.io',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { format: 'directory' },
  // The old Content page now lives on Accomplishments.
  redirects: { '/hobbies/content/': '/accomplishments/#creator' },
});
