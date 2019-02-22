
const { Given, When, Then } = require('cucumber')
const signOut = require('../support/pages/signOut')

When('I click on sign out', { timeout: 20000 }, async function () {
    await this.signOut.findSignOut()
    await this.signOut.signOut()
})

Then('I should see landing page', { timeout: 25000 }, async function () {
    await this.signOut.checkLandingPage()
})