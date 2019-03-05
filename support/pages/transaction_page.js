const BasePage = require('./base_page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class TransactionPage extends BasePage {

    // Selectors
    get transactionLinkSel () { return '[id="nav_2"]' }
    get transTitlePage () { return '[class="enrg-header__title"]' }

    // Elements
    get transactionLink () { return this.browser.element(this.transactionLinkSel) }

    // Methods
    
    async findTransaction () {
        await this.browser.waitForVisible(this.transactionLinkSel, config.waitTime.medium)
        await this.browser.waitForText(this.transactionLinkSel, config.waitTime.medium)
        // assert.strictEqual(transTitle[0], 'Total accumul', `the string ${transTitle[0]} does not match "Total accumul" `)
    }

    async clickTransaction () {
        await this.transactionLink.click()
    }

    // async checkTransPage () {
    //     await this.browser.waitForVisible(this.transTitlePage, config.waitTime.medium)
    //     await this.browser.waitForText(this.transTitlePage, config.waitTime.medium)
    //     let transTitle = await this.browser.getText(this.transactionLinkSel)
    //     assert.strictEqual(transTitle[0], 'Total accumul', `the string ${transTitle[0]} does not match "Total accumul" `)
    // }
}

module.exports = TransactionPage