const { Given, When, Then } = require('cucumber')
const basePage = require('../support/pages/base-page')
const signInPage = require('../support/pages/sign_in-page')


Then('I should see landing page', { timeout: 25000 }, async function () {
        await this.signInPage.checkLandingPage()
})

Given('I am on Sign In page of ECD', { timeout: 20000 }, async function () {
        await this.signInPage.navigateTologIn()
})

When('I enter the username and password', { timeout: 20000 }, async function () {
        await this.signInPage.login_default_user()
})

Given('I should see Dashboard page', { timeout: 20000 }, async function () {
        await this.signInPage.navigateTologIn()
        await this.signInPage.login_default_user()
        await this.basePage.checkIfLoged()
})

When('I enter the {string} username and {string} password', { timeout: 20000 }, async function (username, password) {
        await this.signInPage.browser.waitForVisible(this.signInPage.signInPageTxt, 10*1000)
        await this.signInPage.emailTextFiled.setValue(username)
        await this.signInPage.passwordField.setValue(password)
})

When('I click on Sign In button', { timeout: 20000 }, async function () {
        await this.signInPage.logInButton.click()
})

When('I enter wrong {string} email and correct {string} password', {timeout: 20000}, async function(email, password) {
        await this.signInPage.browser.waitForVisible(this.signInPage.signInPageTxt, 10*1000)
        await this.signInPage.emailTextFiled.setValue(email)
        await this.signInPage.passwordField.setValue(password)
        await this.signInPage.logInButton.click()
})

Then('I should get pop-up message Invalid Username or Password.', {timeout: 20000}, async function () {
        await this.signInPage.invalidCredentials()
})

When('I enter correct {string} email and wrong {string} password', {timeout: 20000}, async function(email, password) {
        await this.signInPage.browser.waitForVisible(this.signInPage.signInPageTxt, 10*1000)        
        await this.signInPage.emailTextFiled.setValue(email)
        await this.signInPage.passwordField.setValue(password)
        await this.signInPage.logInButton.click()
})

Then('I should see pop-up message Invalid Username or Password.', {timeout: 20000}, async function() {
        await this.signInPage.invalidCredentials()
})

When('I enter an invalid {string} email and correct {string} password', {timeout: 20000}, async function(email, password) {
        await this.signInPage.browser.waitForVisible(this.signInPage.signInPageTxt, 10*1000)
        await this.signInPage.emailTextFiled.setValue(email)
        await this.signInPage.passwordField.setValue(password)
        await this.signInPage.logInButton.click()
})

Then('I should see EMAIL IS NOT VALID message under email text field', {timeout: 20000}, async function() {
        await this.signInPage.emailRequired()
})

When('I enter an invalid {string} password and correct {string} email', {timeout: 20000}, async function(password, email) {
        await this.signInPage.browser.waitForVisible(this.signInPage.signInPageTxt, 10*1000)
        await this.signInPage.emailTextFiled.setValue(email)
        await this.signInPage.passwordField.setValue(password)
        await this.signInPage.logInButton.click()
})

Then('I should see AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL. message under password field', {timeout: 20000}, async function() {
        await this.signInPage.passwordRequired()
})

When('I enter an correct {string} email and invalid {string} password', {timeout: 20000}, async function(email, password) {
        await this.signInPage.browser.waitForVisible(this.signInPage.signInPageTxt, 10*1000)
        await this.signInPage.emailTextFiled.setValue(email)
        await this.signInPage.passwordField.setValue(password)
        await this.signInPage.logInButton.click()
})

Then('I should see Minimum 8 characters message under password field', {timeout: 20000}, async function() {
        await this.signInPage.passwordLessEight()
})