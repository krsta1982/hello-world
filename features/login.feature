#
# FILE NAME: log_in.feature
# DESCRIPTION: log_in.feature
# AUTHOR: Dimitrije Dragasevic(DD)
# CREATED: 24-DEC-18
# NOTES:
#

Feature: Log in
As the application user
I want to open and log in the application

  Scenario: Log in with the test credentials
    When I enter the username and password
    Then I should be able to log in
    