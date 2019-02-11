const { Given, When, Then } = require('cucumber')
const loginPage = require('../support/pages/login_page')

When('I enter the username and password', { timeout: 20000 }, async function () {
  await this.loginPage.navigateTologIn()
  await this.loginPage.login()
})

Then('I should be able to log in', { timeout: 20000 }, async function () {
  await this.loginPage.checkIfLoged()
})
