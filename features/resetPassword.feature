#
# FILE NAME: resetPassword.feature
# DESCRIPTION: resetPassword.feature
# AUTHOR: Filip Vidakovic(Vidak)
# CREATED: 28-FEB-19
# NOTES:
#

Feature: Reset password
     I forgot password
     I want to reset password
     So I can to log in again


Scenario: Reset password with email who already exist
     When I click Reset button
     Then I should see Reset password

Scenario Outline: Reset password with email who doesn't exist
     When I entered a "<mail>" that does not exist
     Then I should see pop-up message User does not exist

     Examples:
          | mail               |
          | test1@hotmail.test |
          | test2@hotmail.test |