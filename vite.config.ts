import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
// @ts-ignore
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.includes("*-*") || tag.includes("v-list-item-content"),
        },
      },
    }),
    vuetify({ autoImport: true }),
  ],
  test: {
    setupFiles: "vuetify.config.js",
    deps: {
      inline: ["vuetify"],
    },
    globals: true,
  },
});
