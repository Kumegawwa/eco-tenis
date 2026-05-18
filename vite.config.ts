import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// A linha mágica que avisa o motor para gerar as funções da Vercel:
process.env.NITRO_PRESET = "vercel";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "./src/server.ts" }
    }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});