
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

  Scenario: Create an account
   When I enter the username, password, reapet password, city and nickname
   Then I should be able to create account


