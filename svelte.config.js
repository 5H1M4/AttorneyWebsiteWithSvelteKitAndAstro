import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // Explicitly specify a supported Node.js runtime
      runtime: 'nodejs20.x' // or 'nodejs18.x'/'nodejs16.x'
    })
  },
  preprocess: vitePreprocess()
};

export default config;