// 
// 
// 

const {Given, When, Then} = require('cucumber')
const createAccPage = require('../support/pages/createAcc_page')

Given('I am on Create Account page of ECD', {timeout: 30000}, async function () { //ToDo: change timeout valie to be a global const
        await this.createAccPage.navigateToCreateAccount()
})

When('I enter the username, password, reapet password, city and nickname', {timeout: 20000}, async  function () {
        await this.createAccPage.createDefaultAccount()
})
       
Then('I should be able to create account', {timeout: 30000}, async function () {
        await this.createAccPage.checkIfCreate()
})

When('I enter invalid {string}, password, reapet password, city and nickname', {timeout: 20000 }, async function (username) {
        await this.createAccPage.wait_to_open()

        await this.createAccPage.emailTextField.setValue(username)
        await this.createAccPage.passwordTextField.setValue(this.createAccPage.get_default_password())
        await this.createAccPage.reapetPasswordTextField.setValue(this.createAccPage.get_default_password())
        await this.createAccPage.selectListCountry.selectByAttribute('value', this.createAccPage.get_default_country())
        await this.createAccPage.cityTextField.setValue(this.createAccPage.get_default_city())
        await this.createAccPage.nicknameTextField.setValue(this.createAccPage.get_default_nickname())
})

When('I click on Continue button', {timeout: 20000}, async  function () {
        await this.createAccPage.createAccBtn.click()
})

Then('I should see under email field text EMAIL IS NOT VALID', { timeout: 25000 }, async function () {
        await this.createAccPage.emailNotValid()
})

When('I enter all valid info just skipped country field', { timeout: 20000 }, async function () {
        await this.createAccPage.wait_to_open()

        await this.createAccPage.emailTextField.setValue(this.createAccPage.get_default_username())
        await this.createAccPage.passwordTextField.setValue(this.createAccPage.get_default_password())
        await this.createAccPage.reapetPasswordTextField.setValue(this.createAccPage.get_default_password())
        await this.createAccPage.cityTextField.setValue(this.createAccPage.get_default_city())
        await this.createAccPage.nicknameTextField.setValue(this.createAccPage.get_default_nickname())
        await this.createAccPage.createAccBtn.click()
})

Then('I should see REQUIRED message under country select field', { timeout: 20000 }, async function () {
        // await this.createAccPage.mailError()
})

When('I enter all valid info just skipped city field', { timeout: 20000 }, async function () {
        await this.createAccPage.wait_to_open()

        await this.createAccPage.emailTextField.setValue(this.createAccPage.get_default_username())
        await this.createAccPage.passwordTextField.setValue(this.createAccPage.get_default_password())
        await this.createAccPage.reapetPasswordTextField.setValue(this.createAccPage.get_default_password())
        await this.createAccPage.selectListCountry.selectByAttribute('value', this.createAccPage.get_default_country())
        await this.createAccPage.nicknameTextField.setValue(this.createAccPage.get_default_nickname())

        await this.createAccPage.createAccBtn.click()
})

Then('I should see REQUIRED message under city text field', { timeout: 20000 }, async function () {
        // await this.createAccPage.mailError()
})

When('I enter an invalid {string}', {timeout: 20000 }, async function (passwords) {
        await this.createAccPage.wait_to_open()

        await this.createAccPage.emailTextField.setValue(this.createAccPage.get_default_username())
        await this.createAccPage.passwordTextField.setValue(passwords)
        await this.createAccPage.reapetPasswordTextField.setValue(this.createAccPage.get_default_password())
        await this.createAccPage.selectListCountry.selectByAttribute('value', this.createAccPage.get_default_country())
        await this.createAccPage.cityTextField.setValue(this.createAccPage.get_default_city())
        await this.createAccPage.nicknameTextField.setValue(this.createAccPage.get_default_nickname())

        await this.createAccPage.createAccBtn.click()
})

Then('I should see AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL. message under password field', { timeout: 25000 }, async function () {
        await this.createAccPage.passwordRequired()
})

When('I enter an email that already used', { timeout: 25000 }, async function () {
        await this.createAccPage.createAccountUserExist()
})

Then('I should get pop-up message User already exists.', { timeout: 25000 }, async function () {
        await this.createAccPage.userAlreadyExist()
})

When('I click on the arrow button', { timeout: 20000 }, async function() {
        await this.createAccPage.backArrow()
})

Then('I expect to back me on the landing page', { timeout: 25000 }, async function () {
        await this.createAccPage.navigateToCreateAccount()
})