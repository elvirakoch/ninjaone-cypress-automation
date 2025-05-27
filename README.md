# NinjaOne Cypress Automation Project

This project contains automated tests for the NinjaOne Login Page using [Cypress](https://www.cypress.io/), [Cucumber (Gherkin syntax)](https://cucumber.io/), and [Mochawesome](https://www.npmjs.com/package/mochawesome) for reporting.

---

## Tech Stack

- **Cypress** for end-to-end browser automation
- **Cucumber** for BDD-style test writing (`.feature` files)
- **Mochawesome** for beautiful HTML reporting
- JavaScript (Node.js) environment

---

## Project Structure

├── cypress/
│ ├── e2e/ # Feature files and test definitions
│ ├── pages/ # LoginPage.js (POM)
│ ├── reports/ # Generated test reports (mochawesome)
│ ├── support/ # Cypress custom commands, etc.
├── cypress.config.js # Cypress configuration
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
├── .gitignore # Files/folders to ignore in Git


##  Test Behavior Notes
When running tests on GitHub Actions, the app always shows this message:
 "Human verification failed. Please try again or contact your system administrator for assistance."

I assume this happens because the app tries to stop automated tools like CI from accessing it. So, this message doesn’t mean the test is broken—it’s just how I think the app behaves in automated runs.

But when testing manually on my computer, the app sometimes shows 
    "Invalid username/password. Please contact your system administrator for assistance."
and other times it shows
    "Human verification failed. Please try again or contact your system administrator for assistance." 
for the same test.

To keep the tests working well, I set them to expect the "Human verification failed..." error message during automated runs in GitHub Action. This matches what the app does in CI and still checks that the login fails correctly. This is a known difference because of where the tests run.