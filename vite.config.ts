import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      tsConfigPaths(),
      nitro({
        preset: "vercel",
      }),
    ],
  },
});