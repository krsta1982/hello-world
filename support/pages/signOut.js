
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay*1000);
}

class SignOut extends Page {
    // Selectors
    get signInButtonTWO () { return '[class="enrg-button enrg-button--large enrg-button--wide"]' }
    get mainContainer () { return '[class="enrg-app"]' }
    get signInPagetxt () { return '[class="enrg-header__title"]' }
    get emailfieldSel () { return '[name="username"]' }
    get passwordSel () { return '[name="password"]' }
    get loginButtSel () { return '[type="submit"]' }
    get totalTitelSel () { return '[class="enrg-dashboard__title"]' }
    get hamburgerBtnSell () { return '[class="enrg-button enrg-button--ghost enrg-button--large enrg-header__action"]' }
    get singOutSel () { return '[id="nav_5"]' }

    // Elements
    get signInButton () { return this.browser.element(this.signInButtonTWO) }
    get emailTextFiled () { return this.browser.element(this.emailfieldSel) }
    get passwordField () { return this.browser.element(this.passwordSel) }
    get logInButton () { return this.browser.element(this.loginButtSel) }
    get hamburgerButton () { return this.browser.element(this.hamburgerBtnSell) }
    get signOutButton () { return this.browser.element(this.singOutSel) }

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
        sleep(1)
    }

    async findSignOut () {
        await this.browser.waitForVisible(this.singOutSel, config.waitTime.medium)
        await this.browser.waitForText(this.singOutSel, config.waitTime.medium)
    }

    async signOut () {
        await this.signOutButton.click()
        sleep(1)
    }

    async checkLandingPage () {
        await this.browser.waitForVisible(this.mainContainer, config.waitTime.medium)
        await this.browser.waitForText(this.mainContainer, config.waitTime.medium)
    }
}

module.exports = SignOut