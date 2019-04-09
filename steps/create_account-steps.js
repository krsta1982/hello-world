
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

When('I enter valid {string} password and reapet password in password field', { timeout: 20000 }, async function (password) {
        await this.createAccPage.enter_Password(password)
        await this.createAccPage.continue_button()
})

Then('I should see Dash page', { timeout: 20000 }, async function () {
        await this.createAccPage.dashboard_titel()
})

When('When I make an API call to create {string} account', { timeout: 20000 }, async function (email) {
        let access_token = await this.createAccPage.get_access_token(email)
        await this.createAccPage.open_token_ecd_url(access_token)
})

When('I should see pass dialog on ECD', { timeout: 20000 }, async function () {
        await this.createAccPage.find_password_dialog()
})

When('I enter invalid {string} password and reapet same passwordn in password field', { timeout: 20000 }, async function (pass) {
        await this.createAccPage.enter_Password(pass)
        await this.createAccPage.continue_button()
})

Then('I should see AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL. under password field', { timeout: 20000 }, async function () {
        await this.createAccPage.wrong_password()
})

When('When I make an API call to create {string} account', { timeout: 20000 }, async function (email) {
        let access_token = await this.createAccPage.get_access_token(email)
        await this.createAccPage.open_token_ecd_url(access_token)      
})

When('I should see Password dialog on ECD', { timeout: 20000 }, async function () {
        await this.createAccPage.find_password_dialog()
})

When('I enter invalid {string} password with less then 8 characters', { timeout: 20000 }, async function (Password) {
        await this.createAccPage.enter_Password(Password)
        await this.createAccPage.continue_button()
})

Then('I should see Minimum 8 characters under password field', { timeout: 20000 }, async function () {
        await this.createAccPage.short_password()
})