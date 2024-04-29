import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),

      name: 'ReactAiChatbot',
      // the proper extensions will be added
      fileName: 'index',
    },
    cssCodeSplit: false,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['@mui/material', '@mui/icons-material', '@mui/lab', 'react', 'react-dom', 'rxjs'],
      output: {
        dir: 'dist',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          '@mui/material': 'MaterialUI',
          '@mui/icons-material': 'MaterialIcons',
          '@mui/lab': 'MaterialLab',
          react: 'React',
          'react-dom': 'ReactDOM',
          rxjs: 'rxjs',
        },
      },
    },
  },
});
