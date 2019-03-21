
#
# FILE NAME: Transaction.feature
# DESCRIPTION: Transaction.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 12-FEB-19
# NOTES:
#

Feature: Open transaction page
    As a user of EC Dashboard
    I want to see my transaction
    So that I go to transaction page

Background: Catch Hamburger button
    Given I should see Dashboard page
    When I click Hamburger button

Scenario: Open transaction page
    And I click Transaction link
    Then I should see transaction page