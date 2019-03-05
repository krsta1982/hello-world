const { Given, When, Then } = require('cucumber')
const resetPassword = require('../support/pages/resetPassword')

When('I click Reset button', {timeout: 20000}, async function() {
        await this.resetPassword.navigateTologIn()
        await this.resetPassword.reset()
})

Then('I should see Reset password', {timeout: 25000}, async function() {
        await this.resetPassword.enterEmail()
})