
const { Given, When, Then } = require('cucumber')
const transactionPage = require('../support/pages/transaction_page')


 Given('I am on login page', { timeout: 20000 }, async function () {
   await this.transactionPage.navigateTologIn()
   await this.transactionPage.login()
})
       
 When('I click Menu button', { timeout: 30000}, async function () {
  await this.transactionPage.checkIfLoged()
  // await this.transactionPage.clickOnhamburger()
})
       
 When('I click Transaction link', function () {

})
       
 Then('I should see transaction page', function () {

})