import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   plugins: [react()],
  base: "/Althaf-Portfolio",  // ⚠ Make sure this matches your repo name exactly
 
});