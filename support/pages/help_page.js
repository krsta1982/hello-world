
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay*1000);
}

class HelpPage extends Page {
    // Selectors
    get signInButtonTWO () { return '[class="enrg-button enrg-button--large enrg-button--wide"]' }
    get mainContainer () { return '[class="enrg-app"]' }
    get signInPagetxt () { return '[class="enrg-header__title"]' }
    get emailfieldSel () { return '[name="username"]' }
    get passwordSel () { return '[name="password"]' }
    get loginButtSel () { return '[type="submit"]' }
    get totalTitelSel () { return '[class="enrg-dashboard__title"]' }
    get hamburgerBtnSell () { return '[class="enrg-button enrg-button--ghost enrg-button--large enrg-header__action"]' }
    get helpLinkSel () { return '[id="nav_4"]' }
    get contactTitel () { return '[class="entry-title"]' }
    get urlBloxico () { return '[http://google.com/]' }

    // Elements
    get signInButton () { return this.browser.element(this.signInButtonTWO) }
    get emailTextFiled () { return this.browser.element(this.emailfieldSel) }
    get passwordField () { return this.browser.element(this.passwordSel) }
    get logInButton () { return this.browser.element(this.loginButtSel) }
    get hamburgerButton () { return this.browser.element(this.hamburgerBtnSell) }
    get helpLink () { return this.browser.element(this.helpLinkSel) }

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

    async findHelp () {
        await this.browser.waitForVisible(this.helpLinkSel, config.waitTime.medium)
        await this.browser.waitForText(this.helpLinkSel, config.waitTime.medium)
    }

    async clickHelp () {
        await this.helpLink.click()
        sleep(1)
    }

    async checkHelpPage () {
        // used v4.webdriver.com
        let windowHandles = await this.browser.windowHandles()
        console.log(windowHandles)
        let ecd_win = windowHandles.value[0];
        let blox_win = windowHandles.value[1];
        let ecd_title = await this.browser.window(ecd_win).getTitle();
        console.log('ecd_title: ' + ecd_title); 
        let blox_title = await this.browser.window(blox_win).getTitle();
        let blox_url = await this.browser.window(blox_win).getUrl();
        console.log('blox_title: ' + blox_title); 
        console.log('blox_url: ' + blox_url);
        // compare if url of the 2nd window blox_win includes 'bloxico.com/contact' string
        // we could also use the title, but is more likely to change 
        assert(blox_url.includes('bloxico.com/contact'))
    }
}

module.exports = HelpPage