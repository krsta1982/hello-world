
#
# FILE NAME: profile.feature
# DESCRIPTION: profile.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 18-FEB-19
# NOTES:
#

Feature: Open profile page
  As a user of EC Dashboard
  I want to see my profile
  So that I go to profile page

   Scenario:
    Given I am on landing page
    When I click Hamburger button
    And I click Profile link
    Then I should see profile page