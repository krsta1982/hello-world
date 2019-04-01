
#
# FILE NAME: create_account.feature
# DESCRIPTION: create_account.feature
# AUTHOR: Filip Vidakovic (Vidak)
# CREATED: 28-DEC-18
# NOTES:
#


Feature: Create an account
    As a new user
    I want to create an account

Background: Background for Create Account to ECD feature
    Given I am on Create Account page of ECD

Scenario: Create an account
    Then I should see partners

# Next two scenario is comment because is not defined yet


# Scenario: Choose partner
#     When I click on QA Partner
#     Then I should be redirect to another URL

# Scenario: Register to partner site and after that redirect to ECD and set password
#     When I recive a request from partner to register me as ECD user via API
#     And I should see password form on ECD
#     And I enter password and reapet password in password field
#     Then I should see Dashboard page