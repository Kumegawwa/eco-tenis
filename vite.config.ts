import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

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