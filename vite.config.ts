import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Forçamos o motor a construir para a Vercel, ignorando a Cloudflare
process.env.NITRO_PRESET = "vercel";

export default defineConfig({
  plugins: [
    // Ao deixarmos vazio, ignoramos o server.ts antigo da Lovable
    tanstackStart(), 
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});