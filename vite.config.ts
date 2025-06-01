/**
 * Vite Configuration
 * 
 * This file configures the Vite build tool for the application.
 * It includes:
 * - React plugin for JSX/TSX support
 * - Hot Module Replacement (HMR)
 * - Fast refresh during development
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // Enable React support with default options
  base: "/2D-Dictionary" // Specify where code will exist
}) 