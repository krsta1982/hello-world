
#
# FILE NAME: createAcc.feature
# DESCRIPTION: createAcc.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 28-DEC-18
# NOTES:
#


Feature: Create an account
   As a new user
   I want to create an account

Background: Background for Create Account to ECD feature
    Given I am on Create Account page of ECD

  Scenario: Create an account with valid info
      When I enter the username, password, reapet password, city and nickname
      Then I should be able to create account


  Scenario Outline: Create an account with invalid info
      When I enter invalid "<email>", password, reapet password, city and nickname
      And I click on Continue button
      Then I should see under email field text EMAIL IS NOT VALID

    Examples:
        | email                  |
        | qatesting1@mail@new.how|
        | test.test.com          |
        | s@s.s                  |
        | @testing.com           |


#  Scenario: Create an account without selecting a country
#       When I enter all valid info just skipped country field
#       Then I should see "REQUIRED" message under country select field

 
#  Scenario: Create an account without entering a city
#       When I enter all valid info just skipped city field
#       Then I should see "REQUIRED" message under city text field


#  Scenario: Create an account invalid password
#       When I enter an invalid password
#       Then I should see "AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL." message under password field


# Scenario: Create an account with email that already used
# 	When I enter an email that already used
# 	Then I should get pop-up message "User already exists."


# Scenario: Click on arrow button
# 	When I click on the arrow button
# 	Then I expect to back me on the landing page


# Scenario: Reload page
#      When I entering all valid info
#      Then I should see all field empety    

