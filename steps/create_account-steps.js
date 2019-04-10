
const {Given, When, Then} = require('cucumber')
const createAccPage = require('../support/pages/create_account-page')

Given('I am on Create Account page of ECD', { timeout: 20000 }, async function () { //ToDo: change timeout valie to be a global const
        await this.createAccPage.navigateToCreateAccount()
})

When('I make an API call to create {string} account', { timeout: 20000 }, async function (email) {
        let access_token = await this.createAccPage.get_access_token(email)
        await this.createAccPage.open_token_ecd_url(access_token)
})

When('I should see password dialog on ECD', { timeout: 20000 }, async function () {
        await this.createAccPage.find_password_dialog()
})

When('I enter a {string} in password and confirm password fields', { timeout: 20000 }, async function (password) {
        await this.createAccPage.enter_Password(password)
        await this.createAccPage.continue_button()
})

When('I enter a {string} in password and {string} confirm password fields', { timeout: 20000 }, async function (password, reapetPassword) {
        await this.createAccPage.passwordField.setValue(password)
        await this.createAccPage.reapetPasswordField.setValue(reapetPassword)
        await this.createAccPage.continue_button()
})

Then('I should see Dash page', { timeout: 20000 }, async function () {
        await this.createAccPage.dashboard_titel()
})

Then('I should see AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL. under password field', { timeout: 20000 }, async function () {
        await this.createAccPage.wrong_password()
})

Then('I should see Minimum 8 characters under password field', { timeout: 20000 }, async function () {
        await this.createAccPage.short_password()
})

Then('I should see PASSWORDS DONT MATCH under password field', { timeout: 20000 }, async function () {
        await this.createAccPage.password_not_match()
})