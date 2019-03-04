
const { Given, When, Then } = require('cucumber')
const basePage = require('../support/pages/base_page')

When('I click on sign out', { timeout: 20000 }, async function () {
    await this.basePage.findSignOut()
    await this.basePage.signOut()
})

Then('I should see landing page', { timeout: 25000 }, async function () {
    await this.basePage.checkLandingPage()
})