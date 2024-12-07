import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: false,
    specPattern: "cypress/component/**/*.cy.{jsx}",
  },
});