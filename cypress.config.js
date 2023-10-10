const { defineConfig } = require("cypress");
//const allureWriter = require("@shelex/cypress-allure-plugin/writer");
//import { configureAllureAdapterPlugins } from "@mmisty/cypress-allure-adapter/plugins";
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //allureWriter(on, config);
      //return config;
      configureAllureAdapterPlugins(on, config);
      return config;
    },
  },
});
