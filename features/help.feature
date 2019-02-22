
#
# FILE NAME: help.feature
# DESCRIPTION: help.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 19-FEB-19
# NOTES:
#

Feature: Sign out
  As a user of EC Dashboard
  I need help
  So that I go to help page

  Background:
  Given I am on dashboard page
  When I click Hamburger button

  Scenario: Sign out on EC Dashboard
    And I click Help link
    Then I should see Bloxico support