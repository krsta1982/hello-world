
const { Given, When, Then } = require('cucumber')
const transactionPage = require('../support/pages/transaction_page')
       

       
When('I click Transaction link', { timeout: 37000 }, async function () {
        await this.transactionPage.findTransaction()
        await this.transactionPage.clickTransaction()

})
       
Then('I should see transaction page', {timeout: 40000}, async function () {
        await this.transactionPage.checkTransPage()
})