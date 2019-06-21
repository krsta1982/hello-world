
#
# FILE NAME: help.feature
# DESCRIPTION: help.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 19-FEB-19
# NOTES:
#
@all_env @prod_env
Feature: Help page
    As a user of EC Dashboard
    I need help
    So that I go to help page

Background: Catch Hamburger button
    Given I should see Dashboard page
    When I click Hamburger button

Scenario: I need help
    And I click Help link
    Then I should see Bloxico support