import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Configuração padrão limpa (sem dependências do Lovable)
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  }
});