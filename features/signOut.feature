
#
# FILE NAME: signOut.feature
# DESCRIPTION: signOut.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 21-FEB-19
# NOTES:
#

Feature: Sign out

  As a user of EC Dashboard
  I need help
  So that I go to help page

  Background:
  Given I am on dashboard page
  When I click Hamburger button

  Scenario: Log out with EC Dashboard
  When I click on sign out
  Then I should see landing page

