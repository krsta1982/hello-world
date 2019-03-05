const BasePage = require('./base_page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class TransactionPage extends BasePage {

    // Selectors
    get signInButtonTWO () { return '[class="enrg-button enrg-button--large enrg-button--wide"]' }
    get mainContainer () { return '[class="enrg-app"]' }
    get signInPagetxt () { return '[class="enrg-header__title"]' }
    get emailfieldSel () { return '[name="username"]' }
    get passwordSel () { return '[name="password"]' }
    get loginButtSel () { return '[type="submit"]' }
    get totalTitelSel () { return '[class="enrg-dashboard__title"]' }
    get transactionLinkSel () { return '[id="nav_2"]' }
    get transTitlePage () { return '[class="enrg-header__title"]' }

    // Elements
    get signInButton () { return this.browser.element(this.signInButtonTWO) }
    get emailTextFiled () { return this.browser.element(this.emailfieldSel) }
    get passwordField () { return this.browser.element(this.passwordSel) }
    get logInButton () { return this.browser.element(this.loginButtSel) }
    get transactionLink () { return this.browser.element(this.transactionLinkSel) }

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

    async findTransaction () {
        await this.browser.waitForVisible(this.transactionLinkSel, config.waitTime.medium)
        await this.browser.waitForText(this.transactionLinkSel, config.waitTime.medium)
    }

    async clickTransaction () {
        await this.transactionLink.click()
    }

    async checkTransPage () {
        await this.browser.waitForVisible(this.transTitlePage, config.waitTime.medium)
        await this.browser.waitForText(this.transTitlePage, config.waitTime.medium)
        let transTitle = await this.browser.getText(this.transTitlePage)
        assert(transTitle == "Transactions", `the string ${transTitle} does not match "Transactions" `)
    }
}

module.exports = TransactionPage