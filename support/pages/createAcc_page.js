
const BasePage = require('./base_page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class CreateAccPage extends BasePage {  

    // Create Account page fields selectors
    get emailfieldSel () { return '[name="email"]' }
    get passwordSel () { return '[name="password"]' }
    get reapetPasswordSel () { return '[name="matchPassword"]' }
    get countrySel () { return '[name="regionName"]' }
    get cityfielSel () { return '[name="city"]' }
    get nicknamefielSel () { return '[name="name"]' }
    get continueButtSel () { return '[type="submit"]' }

    // Other selectors
    get createAccountButtonONE () { return '[class="enrg-button enrg-button--large enrg-button--wide enrg-button--primary"]' }
    get mainContainer () { return '[class="enrg-app"]' }
    get createAccountPageTxt () { return '[class="enrg-header__title"]' }  
    get verifyContainer () { return '[class="enrg-form enrg-verify__content"]' }
    get verifyTitleSel () { return '[class="enrg-header__title"]' }
    get emailErrorSel () { return '[class="enrg-input__message"]' }

    // Elements
    get createAccountButton () { return this.browser.element(this.createAccountButtonONE) }
    get emailTextField () { return this.browser.element(this.emailfieldSel) }
    get passwordTextField () { return this.browser.element(this.passwordSel) }
    get reapetPasswordTextField () { return this.browser.element(this.reapetPasswordSel) }
    get selectListCountry () { return this.browser.element(this.countrySel) }
    get cityTextField () { return this.browser.element(this.cityfielSel) }
    get nicknameTextField () { return this.browser.element(this.nicknamefielSel) }
    get createAccBtn () { return this.browser.element(this.continueButtSel) }

    // Methods
    async navigateToCreateAccount () {
        await super.open()
        await this.browser.waitForVisible(this.mainContainer, config.waitTime.long)
        await this.createAccountButton.click()
    }

    async wait_to_open () {
       // wait for a condition
        await this.browser.waitForVisible(this.createAccountPageTxt, 10*1000)
    }

    get_default_username () {
        return TestData.getUser('qa_user_1').email
    }

    get_default_password () {
        return TestData.getUser('qa_user_1').password
    }
    
    get_default_country () {
        return TestData.getUser('qa_user_1').country
    }
    
    get_default_city () {
        return TestData.getUser('qa_user_1').city
    }
    
    get_default_nickname () {
        return TestData.getUser('qa_user_1').nickname
    }

    async createDefaultAccount () {
        this.wait_to_open()

        await this.emailTextField.setValue(this.get_default_username())
        await this.passwordTextField.setValue(this.get_default_password())
        await this.reapetPasswordTextField.setValue(this.get_default_password())
        await this.selectListCountry.selectByAttribute('value', this.get_default_country())
        await this.cityTextField.setValue(this.get_default_city())
        await this.nicknameTextField.setValue(this.get_default_nickname())

        await this.createAccBtn.click()
    }

    async checkIfCreate () {
        await this.browser.waitForVisible(this.verifyContainer, config.waitTime.medium)
        await this.browser.waitForText(this.verifyTitleSel, config.waitTime.medium)
        let totalTitle = await this.browser.getText(this.verifyTitleSel)
        // assert.strictEqual(totalTitle[0], 'Total accumulated', `the string ${totalTitle[0]} does not mach "Total accumulated" `)
    }

    async mailError () {
        await this.browser.waitForVisible(this.emailErrorSel, config.waitTime.medium)
        await this.browser.waitForText(this.emailErrorSel, config.waitTime.medium)
        let error = await this.browser.getText(this.emailErrorSel)
        // assert.strictEqual(error[0], 'Total acc', `the string ${error[0]} not match`)
    }
}

module.exports = CreateAccPage
