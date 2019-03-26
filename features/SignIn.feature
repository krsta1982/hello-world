#
# FILE NAME: login.feature
# DESCRIPTION: login.feature
# AUTHOR: Dimitrije Dragasevic(DD)
# CREATED: 24-DEC-18
# NOTES:
#

Feature: Sign In to EnergyCoin Dashboard (ECD)
   As the application user
   I want to open and login to the application


Background: Background for Sign In to ECD feature
    Given I am on Sign In page of ECD

Scenario: Sign In to ECD with default test credentials
    When I enter the username and password
    Then I should see Dashboard page


Scenario Outline: Sign In to ECD with various usernames and passwords
    When I enter the "<username>" username and "<password>" password
    And I click on Sign In button 
    Then I should be logged in ECD

    Examples:
    | username                  | password  |
    | produser@prod.production  | Isto123!  | 
    | produser@prod.production  | Isto123!  | 

Scenario Outline: Sign In to ECD with email which doesn't exist in data base (DB)
    When I enter wrong "<email>" email and correct "<password>" password
    Then I should get pop-up message Invalid Username or Password.

    Examples:
        |      email        |    password      |
        | testing@test.tes  |   QaTest12.      |
        | qatst@tsti.tess   |   QaTes45}       |

Scenario Outline: Sign In to ECD with wrong password
    When I enter correct "<email>" email and wrong "<password>" password
    Then I should see pop-up message Invalid Username or Password.

    Examples:
        | email                     | password  |
        | produser@prod.production  | Qates123! | 
        | sekula@radili.com         | Test123!  |

Scenario Outline: Sign In to ECD with an invalid email
	When I enter an invalid "<email>" email and correct "<password>" password
	Then I should see EMAIL IS NOT VALID message under email text field

    Examples:
        |     email      |    password   |
        | qatestinG.com  | QaTesting123! |
        | Qa@test@ko.com | Qatest1.2.,   |

Scenario Outline: Sign In to ECD with an invalid password with 8+ characters
	When I enter an invalid "<password>" password and correct "<email>" email
	Then I should see AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL. message under password field

    Examples:
        |     email      |    password   |
        | test@test.qa   |  test123!.,kl |
        | qa@test.com    |  Isto234Ok    |
        | test@qa.qatst  |  Istouvek!.,  |

Scenario Outline: Sign In to ECD with an invalid password with under 8 characters
    When I enter an correct "<email>" email and invalid "<password>" password
    Then I should see Minimum 8 characters message under password field

    Examples:
        |     email      |    password   |
        | qates@ting.com |     Qa123!    |
        | test@qa.com    |     Test23    |
        | qaqa@test.qaq  |     tes12.    |
