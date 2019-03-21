const { Given, When, Then } = require('cucumber')
const resetPassword = require('../support/pages/ResetPassword')

When('I enter email that does exist', {timeout: 20000}, async function() {
        await this.resetPassword.reset()
        await this.resetPassword.enterEmail()
})

Then('I should see Reset password', {timeout: 25000}, async function() {
        await this.resetPassword.checkReset()
})

When('I entered a {string} that does not exist', {timeout: 20000}, async function(email) {
        await this.resetPassword.reset()
        await this.resetPassword.emailField.setValue(email)
     
        await this.resetPassword.continueButton.click()
})

Then('I should see pop-up message User does not exist', {timeout: 25000}, async function() {
        await this.resetPassword.checkWrongMail()
})