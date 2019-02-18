
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay*1000);
}

class ProfilePage extends Page {
    // Selectors
    get signInButtonTWO () { return '[class="enrg-button enrg-button--large enrg-button--wide"]' }
    get mainContainer () { return '[class="enrg-app"]' }
    get signInPagetxt () { return '[class="enrg-header__title"]' }
    get emailfieldSel () { return '[name="username"]' }
    get passwordSel () { return '[name="password"]' }
    get loginButtSel () { return '[type="submit"]' }
    get totalTitelSel () { return '[class="enrg-dashboard__title"]' }
    get hamburgerBtnSell () { return '[class="enrg-button enrg-button--ghost enrg-button--large enrg-header__action"]' }
    get profileLinkSel () { return '[id="nav_3"]' }
    get profileTitelPage () { return '[class="enrg-edit-profile"]' }

    // Elements
    get signInButton () { return this.browser.element(this.signInButtonTWO) }
    get emailTextFiled () { return this.browser.element(this.emailfieldSel) }
    get passwordField () { return this.browser.element(this.passwordSel) }
    get logInButton () { return this.browser.element(this.loginButtSel) }
    get hamburgerButton () { return this.browser.element(this.hamburgerBtnSell) }
    get profileLink () { return this.browser.element(this.profileLinkSel) }

    // Methods
    async navigateTologIn () {
        await super.open()
        await this.browser.waitForVisible(this.mainContainer, config.waitTime.medium)
        await this.signInButton.click()
    }

    async login () {
        await this.browser.waitForVisible(this.signInPagetxt, config.waitTime.medium)
        await this.emailTextFiled.setValue(TestData.getUser('qa_user_2').email)
        await this.passwordField.setValue(TestData.getUser('qa_user_2').password)
        await this.logInButton.click()
    }

    async checkIfLoged () {
        await this.browser.waitForVisible(this.totalTitelSel, config.waitTime.medium)
        await this.browser.waitForText(this.totalTitelSel, config.waitTime.medium)
        let totalTitle = await this.browser.getText(this.totalTitelSel)
        assert.strictEqual(totalTitle[0], 'Total accumulated', `the string ${totalTitle[0]} does not mach "Total accumulated" `)
    }

    async clickOnhamburger () {
        await this.hamburgerButton.click()
        sleep(2)
    }

    async findProfile () {
        await this.browser.waitForVisible(this.profileLinkSel, config.waitTime.medium)
        await this.browser.waitForText(this.profileLinkSel, config.waitTime.medium)
    }

    async clickProfile () {
        await this.profileLink.click()
        sleep(2)
    }

    // async checkProfilePage () {
    //     await this.browser.waitForVisible()
    // }
}

module.exports = ProfilePage