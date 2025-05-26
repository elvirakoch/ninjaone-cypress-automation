import { After, AfterAll } from '@badeball/cypress-cucumber-preprocessor';

After(() => {
  // This runs after each scenario
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.log('Cleared cookies and local storage after scenario');
});

AfterAll(() => {
  // This runs once after all scenarios
  cy.log('All scenarios completed');
});
