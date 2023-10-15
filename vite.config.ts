import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '',
    build: {
        target: "ES2019",
        lib: {
            entry: resolve(__dirname, 'tailwind/tailwind-plugin-debug-screens.ts'),
            name: 'react-tailwindcss-debug-screens',
            formats: ['es', 'cjs'],
            fileName: (format) => `plugin/index.${format}.${format === 'es' ? 'm' : ''}js`,
        },
        minify: false,
        rollupOptions: {
            treeshake: true,
            external: [
                'tailwindcss/plugin',
                'tailwindcss/defaultTheme',
                'tailwindcss/types/config',
            ],
            output: {
                globals: {
                    tailwindcss: 'tailwindcss',
                },
            },
        },
    },
    plugins: [
        react()
    ],
});
