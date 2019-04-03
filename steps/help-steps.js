
const { Given, When, Then } = require('cucumber')
const helpPage = require('../support/pages/help-page')

When('I click Help link', { timeout: 20000 }, async function () {
        await this.helpPage.findHelp()
        await this.helpPage.clickHelp()
})

Then('I should see Bloxico support', { timeout: 30000 }, async function () {
        await this.helpPage.checkHelpPage()
})