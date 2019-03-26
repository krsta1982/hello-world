const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class CreateAccPage extends Page {  

    // Create Account page fields selectors
    get emailfieldSel () { return '[name="email"]' }
    get passwordSel () { return '[name="password"]' }
    get reapetPasswordSel () { return '[name="matchPassword"]' }
    get countrySel () { return '[name="regionName"]' }
    get cityfielSel () { return '[name="city"]' }
    get nicknamefielSel () { return '[name="name"]' }
    get continueButtSel () { return '[type="submit"]' }
    get userExistSel () { return '[class="enrg-error-message__content"]' } 
    get arrowButtonSel () { return '[class="enrg-button enrg-button--ghost enrg-button--large enrg-header__action"]' }

    // Other selectors
    get createAccountButtonSel () { return '[class="enrg-button enrg-button--large enrg-button--wide enrg-button--primary"]' }
    get mainContainer () { return '[class="enrg-app"]' }
    get createAccountPageTxt () { return '[class="enrg-header__title"]' }  
    get verifyContainer () { return '[class="enrg-form enrg-verify__content"]' }
    get verifyTitleSel () { return '[class="enrg-header__title"]' }
    get emailErrorSel () { return '[class="enrg-input__message"]' }
    get passwordErrorSel () { return '[class="enrg-input__message"]' }
    get partnersSel () { return '[class="enrg-link"]' }

    // Elements
    get createAccountButton () { return this.browser.element(this.createAccountButtonSel) }
    get emailTextField () { return this.browser.element(this.emailfieldSel) }
    get passwordTextField () { return this.browser.element(this.passwordSel) }
    get reapetPasswordTextField () { return this.browser.element(this.reapetPasswordSel) }
    get selectListCountry () { return this.browser.element(this.countrySel) }
    get cityTextField () { return this.browser.element(this.cityfielSel) }
    get nicknameTextField () { return this.browser.element(this.nicknamefielSel) }
    get createAccBtn () { return this.browser.element(this.continueButtSel) }
    get arrowButton () { return this.browser.element(this.arrowButtonSel)}

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

    async createAccountUserExist () {
        await this.wait_to_open()

        await this.emailTextField.setValue(TestData.getUser('qa_user_3').email)
        await this.passwordTextField.setValue(TestData.getUser('qa_user_3').password)
        await this.reapetPasswordTextField.setValue(TestData.getUser('qa_user_3').reapetPassword)
        await this.selectListCountry.selectByAttribute('value', TestData.getUser('qa_user_3').country)
        await this.cityTextField.setValue(TestData.getUser('qa_user_3').city)
        await this.nicknameTextField.setValue(TestData.getUser('qa_user_3').nickname)

        await this.createAccBtn.click()
    }

    async userAlreadyExist () {
        await this.browser.waitForVisible(this.userExistSel, config.waitTime.medium)
        await this.browser.waitForText(this.userExistSel, config.waitTime.medium)
        let exist = await this.browser.getText(this.userExistSel)
        assert(exist == "User already exists.", `the string ${exist} does not match "User already exists." `)
    }

    async checkIfCreate () {
        await this.browser.waitForVisible(this.verifyContainer, config.waitTime.medium)
        await this.browser.waitForText(this.verifyTitleSel, config.waitTime.medium)
        let verifyTitle = await this.browser.getText(this.verifyTitleSel)
        assert(verifyTitle == "Verify account", `the string ${verifyTitle} does not mach "Verify account" `)
    }

    async emailNotValid () {
        await this.browser.waitForVisible(this.emailErrorSel, config.waitTime.medium)
        await this.browser.waitForText(this.emailErrorSel, config.waitTime.medium)
        let error = await this.browser.getText(this.emailErrorSel)
        assert(error == "EMAIL IS NOT VALID", `the string ${error} does not match "EMAIL IS NOT VALID" `)
    }

    async passwordRequired () {
        await this.browser.waitForVisible(this.passwordErrorSel, config.waitTime.medium)
        await this.browser.waitForText(this.passwordErrorSel, config.waitTime.medium)
        let password = await this.browser.getText(this.passwordErrorSel)
        assert(password == "AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL.,PASSWORDS DON'T MATCH", `the string ${password} does not match "AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL.,PASSWORDS DON'T MATCH" `)
    }

    async backArrow () {
        // await this.browser.waitForVisible(this.arrowButtonSel, config.waitTime.medi`um)
        // await this.browser.waitForText(this.arrowButtonSel, config.waitTime.medium)
        await this.arrowButton.click()
    }

    async findPartners () {
        await this.browser.waitForVisible(this.partnersSel, config.waitTime.medium)
        await this.browser.waitForText(this.partnersSel, config.waitTime.medium)
        let partners = await this.browser.getText(this.partnersSel)
        assert(partners == "Ring-ring", `the string ${partners} does not match "Ring-ring" `)
    }
}

module.exports = CreateAccPage