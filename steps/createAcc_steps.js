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
        await this.createAccPage.mailError()
})