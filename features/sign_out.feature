
#
# FILE NAME: sign_out.feature
# DESCRIPTION: sign_out.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 21-FEB-19
# NOTES:
#

Feature: Sign out
   As a user of ECD
   I want to loged out
   So I go to landing page

Background: Catch Hamburger button
    Given I should see Dashboard page
    When I click Hamburger button

Scenario: Sign out with ECD
    When I click on Sign Out link
    Then I should see landing page

