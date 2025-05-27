Feature: Login Functionality

# Please Note: For details on inconsistent login error messages during automated runs,
# please see the explanation in the README file under "Test Behavior Notes".

Background:
    Given the user is on the Login page
 
  Scenario: Invalid login attempt
    When the user enters invalid email and password
    And clicks "Sign in"
    Then the user should see a validation error message "Human verification failed. Please try again or contact your system administrator for assistance."

  Scenario: Leave email blank and fill password
    When the user leaves email blank and enters a password
    And clicks "Sign in"
    Then the user should see an error message "Error during login"

  Scenario: Leave password blank and fill email
    When the user enters an email and leaves password blank
    And clicks "Sign in"
    Then the user should see an error message "Error during login"

  Scenario: Leave both fields blank
    When the user leaves email and password blank
    And clicks "Sign in"
    Then the user should see an error message "Error during login"

    Scenario: Login with min length email and password
    When the user enters an email and password with the minimum allowed characters
    And clicks "Sign in"
    Then the user should see a validation error message "Human verification failed. Please try again or contact your system administrator for assistance."

    Scenario: Forgot password link redirects to Reset Password page
    When the user clicks "Forgot your password?" link
    Then the user should be redirected to the "Reset Password" page

    Scenario: Registration page redirection
    When the user clicks "Do not have an account?" link
    Then the user should be redirected to the "Registration" page

    Scenario: Contact us page navigation
    When the user clicks external "Contact us" link
    Then the user should be navigated to the external "Ninja Contact" tab

    Scenario: Invalid email format with valid password
    When the user enters "random@com" as email
    And the user enters a password
    And clicks "Sign in"
    Then the user should see a validation error message "Human verification failed. Please try again or contact your system administrator for assistance."

    Scenario: Login with whitespace only input
    When the user enters only spaces in email and password fields
    And clicks "Sign in"
    Then the user should see an error message "Error during login"

    Scenario: Extremely long input in fields
    When the user enters an email or password longer than 300 characters
    And clicks "Sign in"
    Then the user should see a validation error message "Human verification failed. Please try again or contact your system administrator for assistance."

    Scenario: Script injection in email field
    When the user enters "<script>alert(1)</script>" in email field
    And the user enters a password
    And clicks "Sign in"
    Then the user should see a validation error message "Human verification failed. Please try again or contact your system administrator for assistance."

    Scenario: SQL injection in password
    When the user enters a valid email
    And the user enters "OR '1'='1--" in password field
    And clicks "Sign in"
    Then the user should see a validation error message "Human verification failed. Please try again or contact your system administrator for assistance."

    Scenario: Checkbox visibility
    When the Login page is fully loaded
    Then "Keep me signed in" checkbox is visible and clickable

    Scenario: Password hidden during entry
    And the user enters a password
    Then characters should be hidden

  