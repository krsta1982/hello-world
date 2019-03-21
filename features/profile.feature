
#
# FILE NAME: Profile.feature
# DESCRIPTION: Profile.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 18-FEB-19
# NOTES:
#

Feature: Profile page
    As a user of EC Dashboard
    I want to see my profile
    So that I go to profile page


Background: Catch Hamburger button
    Given I should see Dashboard page
    When I click Hamburger button


Scenario: Open profile page
    And I click Profile link
    Then I should see profile page