
const { Given, When, Then } = require('cucumber')
const profilePage = require('../support/pages/profile_page')

Given('I am on landing page', { timeout: 20000}, async function () {
    await this.profilePage.navigateTologIn()
    await this.profilePage.login()
})

When('I click Hamburger button', { timeout: 30000}, async function () {
    await this.profilePage.checkIfLoged()
    await this.profilePage.clickOnhamburger()
})

When('I click Profile link', { timeout: 40000}, async function () {
    await this.profilePage.findProfile()
    await this.profilePage.clickProfile()
})

Then('I should see profile page', { timeout: 38000}, async function () {

})