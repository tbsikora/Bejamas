const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bejamas.io',
    viewportWidth: 1440,
    viewportHeight: 900, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
