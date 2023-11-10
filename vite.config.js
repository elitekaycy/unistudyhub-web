import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
import path from 'path';
import ViteCSS from 'vite-plugin-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), ViteCSS()],
  resolve: {
    alias: {
      // Add any custom aliases for your project
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      // Add more aliases as needed
    },
  },
});
