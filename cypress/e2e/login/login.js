import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/LoginPage';
import { credentials } from '../../support/testData';


const loginPage = new LoginPage();

Given('the user is on the Login page', () => {
  loginPage.visit();
});

When('the user enters invalid email and password', () => {
  loginPage.enterEmail(credentials.invalidEmail);
  loginPage.enterPassword(credentials.wrongPassword);
});

When('clicks {string}', (buttonText) => {
  loginPage.clickButton(buttonText);
});

When("the user leaves email blank and enters a password", () => {
  loginPage.clearEmail();// ensure it's empty
  loginPage.enterPassword(credentials.somePassword);
});

When("the user enters an email and leaves password blank", () => {
  loginPage.enterEmail(credentials.someEmail);
  loginPage.clearPassword();

});

When("the user leaves email and password blank", () => {
  loginPage.clearEmail();
  loginPage.clearPassword(); 

});

When("the user enters an email and password with the minimum allowed characters", () => {
  loginPage.enterEmail(credentials.minEmail);
  loginPage.enterPassword(credentials.minPassword);
});

Then(
  'the user should see a validation error message {string}',
  (expectedMessage) => {
    loginPage.getValidationErrorMessage()
      .should('be.visible')
      .and('have.text', expectedMessage);
  }
);

Then('the user should see an error message {string}', (expectedMessage) => {
  loginPage.getErrorMessage()
    .should('be.visible')
    .and('contain.text', expectedMessage);
});

When('the user clicks {string} link', (linkText) => {
  loginPage.clickLink(linkText);
});

Then('the user should be redirected to the {string} page', (pageName) => {
  const routes = {
    'Reset Password': '/resetPassword',
    'Registration': '/register',
  };
  cy.url().should('include', routes[pageName]);
});

When('the user clicks external {string} link', (linkText) => {
  const urlMap = {
    'Contact us': 'https://resources.ninjarmm.com/webapp/app/ninja-contact.html',
  };

  const expectedUrl = urlMap[linkText];
  expect(expectedUrl, `No mapping found for link "${linkText}"`).to.exist;

  cy.contains('a', linkText, { timeout: 10000 })
    .should('have.attr', 'href', expectedUrl)
    .invoke('removeAttr', 'target') // removing target attribute so Cypress can open the link in the current tab
    .click();
});

Then('the user should be navigated to the external {string} tab', (pageName) => {
  const urlMap = {
    'Ninja Contact': 'https://resources.ninjarmm.com/webapp/app/ninja-contact.html',
  };

  const expectedUrl = urlMap[pageName];
  expect(expectedUrl, `No mapping found for page "${pageName}"`).to.exist;

  cy.origin(new URL(expectedUrl).origin, { args: { expectedUrl } }, ({ expectedUrl }) => {
    cy.url().should('eq', expectedUrl);
  });
});


When('the user enters {string} as email', (email) => {
  loginPage.enterEmail(email);
});

When('the user enters a password', () => {
  loginPage.enterPassword(credentials.validPassFormat);
});

When('the user enters only spaces in email and password fields', () => {
  loginPage.enterEmail(credentials.spacesOnly);
  loginPage.enterPassword(credentials.spacesOnly);
});

When('the user enters an email or password longer than 300 characters', () => {
  loginPage.enterEmail(credentials.longString); // 301 characters
  loginPage.enterPassword(credentials.longString);
});

When('the user enters {string} in email field', (input) => {
  loginPage.enterEmail(input);
});

When('the user enters a valid email', () => {
  loginPage.enterEmail(credentials.validEmailFormat);
});

When('the user enters {string} in password field', (password) => {
  loginPage.enterPassword(password);
});

When('the Login page is fully loaded', () => {
  loginPage.getEmailInput().should('be.visible');
});

Then('{string} checkbox is visible and clickable', (checkboxLabel) => {
  loginPage.verifyCheckboxIsVisibleAndClickable(checkboxLabel);
});

Then('characters should be hidden', () => {
  loginPage.verifyPasswordIsHidden();
});


