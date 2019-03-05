const BasePage = require('./base_page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class HelpPage extends BasePage {

    // Selectors
    get helpLinkSel () { return '[id="nav_4"]' }
    get contactTitel () { return '[class="entry-title"]' }
    get urlBloxico () { return '[http://google.com/]' }

    // Elements
    get helpLink () { return this.browser.element(this.helpLinkSel) }

    // Methods

    async findHelp () {
        await this.browser.waitForVisible(this.helpLinkSel, config.waitTime.medium)
        await this.browser.waitForText(this.helpLinkSel, config.waitTime.medium)
    }

    async clickHelp () {
        await this.helpLink.click()
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