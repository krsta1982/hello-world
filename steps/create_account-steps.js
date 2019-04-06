
const {Given, When, Then} = require('cucumber')
const basePage = require('../support/pages/base-page')
const createAccPage = require('../support/pages/create_account-page')

Given('I am on Create Account page of ECD', {timeout: 30000}, async function () { //ToDo: change timeout valie to be a global const
        await this.createAccPage.navigateToCreateAccount()
})

Then('I should see partners', { timeout: 20000 }, async function () {
        await this.createAccPage.findPartners()
})

Then('I make an API call to create {string} account', { timeout: 20000 }, async function (account) {
        await this.basePage.api_call('api/user/connectExternal', [["email"],[]])
})