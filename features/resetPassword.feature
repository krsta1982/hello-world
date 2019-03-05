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
