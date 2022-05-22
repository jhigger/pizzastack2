import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()]
=======
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteCompression({
			verbose: true,
			deleteOriginFile: true,
			algorithm: 'brotliCompress'
		})
	]
>>>>>>> 6d6d054f52b056262895f7adc2722a39c2ecceb5
});
