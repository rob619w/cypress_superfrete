const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'mjf7cv',
experimentalModifyObstructiveThirdPartyCode: true,
hideXHR: true,
video: true,
pageLoadTimeout: 200000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
