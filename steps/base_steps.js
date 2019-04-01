
const { Given, When, Then } = require('cucumber')
const basePage = require('../support/pages/base_page')

When('I click on Sign Out link', { timeout: 20000 }, async function () {
        await this.basePage.findSignOut()
        await this.basePage.signOut()
})

Then('I should be logged in ECD', { timeout: 20000 }, async function () {
    await this.basePage.checkIfLoged()
})

When('I click Hamburger button', { timeout: 30000}, async function () {
    await this.basePage.checkIfLoged()
    await this.basePage.clickOnhamburger()
})