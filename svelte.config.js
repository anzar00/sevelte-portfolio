import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel({
      runtime: 'nodejs18.x' // Specify Node.js 18 runtime
    })
  },
  preprocess: vitePreprocess()
};

export default config;