
const { Given, When, Then } = require('cucumber')
const profilePage = require('../support/pages/profile_page')

When('I click Profile link', { timeout: 35000}, async function () {
    await this.profilePage.findProfile()
    await this.profilePage.clickProfile()
})

Then('I should see profile page', { timeout: 38000}, async function () {
    await this.profilePage.checkProfilePage()
})