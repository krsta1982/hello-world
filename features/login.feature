#
# FILE NAME: login.feature
# DESCRIPTION: login.feature
# AUTHOR: Dimitrije Dragasevic(DD)
# CREATED: 24-DEC-18
# NOTES:
#

Feature: Login to EnergyCoin Dashboard (ECD)
    As the application user
    I want to open and login to the application

Background: Background for Login to ECD feature
    Given I am on Login page of ECD

Scenario: Login to ECD with default test credentials
    When I enter the username and password
    Then I should be logged in ECD


Scenario Outline: Login to ECD with various usernames and passwords
    When I enter the "<username>" username and "<password>" password
    And I click on Sign In button 
    Then I should be logged in ECD

    Examples:
    | username           | password        |
    | tanenad@gmail.com  | Bloxico2019&&&  | 
    | tanenad@gmail.com  | Bloxico2019&&&  | 
    | tanenad@gmail.com  | Bloxico2019&&&  | 
    