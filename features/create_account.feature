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


Scenario Outline: Create an account
    # Then I should see partners
    When I make an API call to create "<email>" account
    And I should see password dialog on ECD
    And I enter valid "<password>" password and reapet password in password field
    Then I should see Dash page

    Examples:
    |   password  |         email          |
    |  Qatest123! | qaTesTing60@gmail.com  |
    |  QApass12!! | qaTesTing61@gmail.com  |
    |  Isto123!   | qaTesTing62@gmail.com  |

Scenario Outline: Create an account with invalid password with 8+ characters
    When I make an API call to create "<email>" account
    And I should see pass dialog on ECD
    And I enter invalid "<pass>" password and reapet same passwordn in password field
    Then I should see AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL. under password field

    Examples:
    |    pass    |         email         |
    | qatest123  | qaTesTing63@gmail.com |
    | uvek12345  | qaTesTing64@gmail.com |
    | workpls69  | qaTesTing65@gmail.com |

Scenario Outline: Create an account with invalid password with less then 8 characters
    When I make an API call to create "<email>" account
    And I should see Password dialog on ECD
    And I enter invalid "<Password>" password with less then 8 characters 
    Then I should see Minimum 8 characters under password field

    Examples:
    | Password |         email         |
    |  Isto1!  | qaTesTing66@gmail.com |
    |  qaTe2!  | qaTesTing67@gmail.com |
    |  WOrk4.  | qaTesTing68@gmail.com |


