const { Given, When, Then } = require('cucumber')
const basePage = require('../support/pages/base_page')
const loginPage = require('../support/pages/login_page')


Then('I should see landing page', { timeout: 25000 }, async function () {
        await this.loginPage.checkLandingPage()
})

Given('I am on Login page of ECD', { timeout: 20000 }, async function () {
        await this.loginPage.navigateTologIn()
})

When('I enter the username and password', { timeout: 20000 }, async function () {
        await this.loginPage.login_default_user()
})

Given('I am on dashboard page', { timeout: 20000 }, async function () {
        await this.loginPage.navigateTologIn()
        await this.loginPage.login_default_user()
        await this.basePage.checkIfLoged()
})

// When('I enter the {string} username and {string} password', { timeout: 20000 }, function (username, password, callback) {
When('I enter the {string} username and {string} password', { timeout: 20000 }, async function (username, password) {
        await this.loginPage.browser.waitForVisible(this.loginPage.signInPageTxt, 10*1000)
        await this.loginPage.emailTextFiled.setValue(username)
        await this.loginPage.passwordField.setValue(password)

        // this.loginPage.browser.waitForVisible(this.loginPage.signInPageTxt, 10*1000)
        // this.loginPage.emailTextFiled.setValue(username)
        // this.loginPage.passwordField.setValue(password)
        // callback()
})

When('I click on Sign In button', { timeout: 20000 }, async function () {
        await this.loginPage.logInButton.click()
})

