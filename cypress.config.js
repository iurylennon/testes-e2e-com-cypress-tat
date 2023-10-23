/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 15000,
    requestTimeout: 30000,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
