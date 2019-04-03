const BasePage = require('./base-page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class ProfilePage extends BasePage {

    // Selectors
    get profileLinkSel () { return '[id="nav_3"]' }
    get profileTitelPage () { return '[class="enrg-header__title"]' }

    // Elements
    get profileLink () { return this.browser.element(this.profileLinkSel) }

    // Methods

    async findProfile () {
        await this.browser.waitForVisible(this.profileLinkSel, config.waitTime.medium)
        await this.browser.waitForText(this.profileLinkSel, config.waitTime.medium)
    }

    async clickProfile () {
        await this.profileLink.click()
    }

    async checkProfilePage () {
        await this.browser.waitForVisible(this.profileTitelPage, config.waitTime.medium)
        await this.browser.waitForText(this.profileTitelPage, config.waitTime.medium)
        let titelProfil = await this.browser.getText(this.profileTitelPage)
        assert(titelProfil == "Edit profile", `the string ${titelProfil} does not match "Edit profile" `)
    }
}

module.exports = ProfilePage