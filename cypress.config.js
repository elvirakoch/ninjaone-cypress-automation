const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.ninjarmm.com/auth/#/login",
    async setupNodeEvents(on, config) {
      // add cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // register esbuild bundler with cucumber plugin
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    
    specPattern: 'cypress/e2e/**/*.feature',  // use .feature files for specs
    supportFile: false, // or your support file path
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
},
    retries: 1,
  },

});
