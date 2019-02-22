
#
# FILE NAME: profile.feature
# DESCRIPTION: profile.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 18-FEB-19
# NOTES:
#

Feature: Profile page
  As a user of EC Dashboard
  I want to see my profile
  So that I go to profile page


Background:
  Given I am on dashboard page
  When I click Hamburger button


   Scenario: Open profile page
    And I click Profile link
    Then I should see profile page