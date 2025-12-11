import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Raíz del proyecto
  root: '.',

  // Base URL para producción (ajustar si se despliega en subdirectorio)
  base: './',

  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
    cors: true
  },

  // Configuración de build
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,

    // Rollup options para output limpio
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        // Nombres de archivo predecibles para facilitar caching
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Organizar assets por tipo
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.(png|jpe?g|gif|svg|ico|webp)$/.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },

    // Minificación
    minify: 'esbuild',

    // Target browsers
    target: 'es2020'
  },

  // Resolve aliases para imports más limpios
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@css': resolve(__dirname, 'css')
    }
  },

  // Optimización de dependencias
  optimizeDeps: {
    include: []
  }
});
