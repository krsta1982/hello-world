#
# FILE NAME: create_account.feature
# DESCRIPTION: create_account.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 28-DEC-18
# NOTES:
#

Feature: Create an account
    As a new user
    I want to create an account

Background: Background for Create Account to ECD feature
    Given I am on Create Account page of ECD
    When I make an API call to create "qa-partner-u3@gmail.com" account
    And I should see password dialog on ECD

Scenario: Create an account
    # Then I should see partners
    And I enter valid "<password>" password and reapet password in password field
    Then I should see Dashboard page

    Examples:
    |   password  |
    |  Qatest123! |
    |  QApass12!! |
    |  Isto123!   |

Scenario: Create an account with invalid password with 8+ characters
    And I enter invalid "<pass>" password and reapet same passwordn in password field
    Then I should see AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL. under password field

    Examples:
    |    pass    |
    | qatest123  |
    | uvek12345  |
    | workpls69  |

Scenario: Create an account with invalid password with less then 8 characters
    And I enter invalid "<Password>" password with less then 8 characters 
    Then I should see Minimum 8 characters under password field

    Examples:
    | Password |
    |  Isto1!  |
    |  qaTe2!  |
    |  WOrk4.  |
    |  Ist123! |


