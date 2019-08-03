#
# FILE NAME: create_account.feature
# DESCRIPTION: create_account.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 28-DEC-18
# NOTES:
#
@dev_env
Feature: Create an account
    As a new user
    I want to create an account

Background: Background for Create Account to ECD feature
    Given I am on Create Account page of ECD
@all_env
Scenario: Gog Platform
    When I click GOG Platform
    Then I should see GOG website

Scenario Outline: Create an account
    When I make an API call to create "<email>" account
    And I should see password dialog on ECD
    And I enter a "<password>" in password and confirm password fields
    Then I should see Dash page

    Examples:
    | email                   | password   |
    | iiTesTing7769@gmail.com | Qatest123! |   
    | iiTesTing7869@gmail.com | QApass12!! |  
    | iiTesTing7969@gmail.com | Isto123!   |  


Scenario Outline: Create an account with invalid password with 8+ characters
    When I make an API call to create "<email>" account
    And I should see password dialog on ECD
    And I enter a "<password>" in password and confirm password fields
    Then I should see AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL. under password field

    Examples:
    | email                 | password  |
    | krstak@gmail.com      | qatest123 | 
    | qaTesTing64@gmail.com | uvek12345 |  
    | qaTesTing65@gmail.com | workpls69 |


Scenario Outline: Create an account with invalid password with less then 8 characters
    When I make an API call to create "<email>" account
    And I should see password dialog on ECD
    And I enter a "<password>" in password and confirm password fields 
    Then I should see Minimum 8 characters under password field

    Examples:
    | email                 | password |
    | qaTesTing66@gmail.com | Isto1!   |   
    | qaTesTing67@gmail.com | qaTe2!   |  
    | qaTesTing68@gmail.com | WOrk4.   |


Scenario Outline: Create an account with different password and reapet password
    When I make an API call to create "<email>" account
    And I should see password dialog on ECD
    And I enter a "<password>" in password and "<reapetPassword>" confirm password fields
    Then I should see PASSWORDS DONT MATCH under password field

    Examples:
    | email                 | password | reapetPassword |
    | qaTesTing66@gmail.com | Isto123! | Isto123.       | 
    | qaTesTing67@gmail.com | qaTest2! | Kakoo34!       |  
    | qaTesTing68@gmail.com | Testi35! | QateS34!       |


