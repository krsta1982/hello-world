
#
# FILE NAME: transaction.feature
# DESCRIPTION: transaction.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 12-FEB-19
# NOTES:
#

Feature: Open transaction page
  As a user of EC Dashboard
  I want to see my transaction
  So that I go to transaction page

  Background:
  Given I am on dashboard page
  When I click Hamburger button

   Scenario:
    And I click Transaction link
    Then I should see transaction page