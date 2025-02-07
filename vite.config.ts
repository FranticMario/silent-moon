import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// import daisyui from 'daisyui';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
});
