#
# FILE NAME: reset_password.feature
# DESCRIPTION: reset_password.feature
# AUTHOR: Filip Vidakovic(Vidak)
# CREATED: 28-FEB-19
# NOTES:
#

Feature: Reset password
     I forgot password
     I want to reset password
     So I can to Sign In again


Background: Background for Sign In to ECD feature
    Given I am on Sign In page of ECD

Scenario: Reset password with email who already exist
     When I enter email that does exist
     Then I should see Reset password

Scenario Outline: Reset password with email who doesn't exist
     When I entered a "<mail>" that does not exist
     Then I should see pop-up message User does not exist

     Examples:
          | mail               |
          | test1@hotmail.test |
          | test2@hotmail.test |