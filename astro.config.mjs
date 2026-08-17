// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Static output — the site has no auth, forms or app state.
  output: 'static',
  build: {
    // Emit /about/index.html so routes stay extension-less on Vercel.
    format: 'directory',
  },
  image: {
    // Source photography is unoptimised (up to 3.7MB a frame); sharp
    // downscales it and emits webp at build time.
    responsiveStyles: false,
  },
});
