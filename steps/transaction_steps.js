
const { Given, When, Then } = require('cucumber')
const transactionPage = require('../support/pages/transaction_page')


Given('I am on dashboard page', { timeout: 20000 }, async function () {
        await this.transactionPage.navigateTologIn()
        await this.transactionPage.login()
})
       
When('I click Hamburger button', { timeout: 30000}, async function () {
        await this.transactionPage.checkIfLoged()
        await this.transactionPage.clickOnhamburger()
})
       
When('I click Transaction link', { timeout: 37000 }, async function () {
        await this.transactionPage.findTransaction()
        await this.transactionPage.clickTransaction()

})
       
Then('I should see transaction page', {timeout: 40000}, async function () {
        // await this.transactionPage.checkTransPage()
})