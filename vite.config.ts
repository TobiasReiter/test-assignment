/// <reference types="vitest" />
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    test: {
        // ...
    },
    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths()
    ],
})
