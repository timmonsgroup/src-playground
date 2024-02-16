import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// Pull the ports from the environment or default to 3000 / 3001
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const backend_port = process.env.BACKEND_PORT ? parseInt(process.env.BACKEND_PORT) : 3001;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // run the server on a specified port
    port,
    // proxy the /api requests to a local the backend
    proxy: {
      '/api': {
        // use any target you want for playing around with api calls
        target: `http://localhost:${backend_port}`,
        changeOrigin: true,
      }
    }
  },
  // some node_modules have not updated to esm and throw warnings in a build
  // Use this to suppress those warnings
  build: {
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return
        }
        warn(warning)
      }
    }
  },
  // Plugins to handle https (plus the cert) and react
  plugins: [mkcert(), react()],
})