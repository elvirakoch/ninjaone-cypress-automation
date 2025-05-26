
export class LoginPage {
  visit() {
    cy.visit('/login');
  }

  getEmailInput() {
    return cy.get('input[id="email"]');
  }
  getPasswordInput() {
    return cy.get('input[id="password"]');
  }

  clickButton(buttonText) {
  cy.contains('button', buttonText).click();
  }

  getValidationErrorMessage() {
    return cy.get('div.alert.alert-danger'); 
  }

  getErrorMessage() {
  return cy.get('#alert-messages > div');
}


enterEmail(email) {
  this.getEmailInput().clear().type(email);
}

enterPassword(password) {
  this.getPasswordInput().clear().type(password);
}

clearEmail() {
  this.getEmailInput().clear();
}

clearPassword() {
  this.getPasswordInput().clear();
}

clickLink(linkText) {
    cy.contains('a', linkText).click();
  }

verifyCheckboxIsVisibleAndClickable(labelText) {
    cy.contains('label', labelText)
      .invoke('attr', 'for')
      .then((checkboxId) => {
        cy.get(`#${checkboxId}`)
          .should('be.visible')
          .and('be.enabled');
      });
  }

  verifyPasswordIsHidden() {
    this.getPasswordInput().should('have.attr', 'type', 'password');
  }







}
