const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class SignInPage extends Page {
  
  // Selectors
  get signInButtonSel () { return '[class="enrg-button enrg-button--large enrg-button--wide"]' }
  get mainContainer () { return '[class="enrg-app"]' }
  get signInPageTxt () { return '[class="enrg-header__title"]' }
  get emailfieldSel () { return '[name="username"]' }
  get passwordSel () { return '[name="password"]' }
  get loginButtSel () { return '[type="submit"]' }
  get invalalidSel () { return '[class="enrg-error-message__message"]' }
  get emailRequiredSel () { return '[class="enrg-input__message"]'} 
  get passwordRequiredSel () { return '[class="enrg-input__message"]' }

  // Elements
  get signInButton () { return this.browser.element(this.signInButtonSel) }
  get emailTextFiled () { return this.browser.element(this.emailfieldSel) }
  get passwordField () { return this.browser.element(this.passwordSel) }
  get logInButton () { return this.browser.element(this.loginButtSel) }

  // Methodssss
  async navigateTologIn () {
    await super.open()
    await this.browser.waitForVisible(this.mainContainer, config.waitTime.long)
    await this.signInButton.click()
  }

  async login_default_user () {
    await this.browser.waitForVisible(this.signInPageTxt, config.waitTime.medium)
    await this.emailTextFiled.setValue(TestData.getUser('qa_user_2').email)
    await this.passwordField.setValue(TestData.getUser('qa_user_2').password)
    await this.logInButton.click()
  }

  async checkLandingPage () {
    await this.browser.waitForVisible(this.mainContainer, config.waitTime.medium)
    await this.browser.waitForText(this.mainContainer, config.waitTime.medium)
  }

  async invalidCredentials () {
    await this.browser.waitForVisible(this.invalalidSel, config.waitTime.medium)
    await this.browser.waitForText(this.invalalidSel, config.waitTime.medium)
    let invalid = await this.browser.getText(this.invalalidSel)
    assert(invalid == "Invalid Username or Password.", `string ${invalid} doesn' t match with "Invalid Username or Password." `)
  }

  async emailRequired () {
    await this.browser.waitForVisible(this.emailRequiredSel, config.waitTime.medium)
    await this.browser.waitForText(this.emailRequiredSel, config,waitTime.medium)
    let required = await this.browser.getText(this.emailRequiredSel)
    assert(required == "EMAIL IS NOT VALID", `string ${required} doesn't match with "EMAIL IS NOT VALID" `)
  }

  async passwordRequired () {
    await this.browser.waitForVisible(this.passwordRequiredSel, config.waitTime.medium)
    await this.browser.waitForText(this.passwordRequiredSel, config.waitTime.medium)
    let passReq = await this.browser.getText(this.passwordRequiredSel)
    assert(passReq == "AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL.", `string ${passReq} doesn't match with "AT LEAST 1 UPPERCASE, LOWERCASE, DIGIT AND SYMBOL." `)
  }

  async passwordLessEight () {
    await this.browser.waitForVisible(this.passwordRequiredSel, config.waitTime.medium)
    await this.browser.waitForText(this.passwordRequiredSel, config.waitTime.medium)
    let lessEight = await this.browser.getText(this.passwordRequiredSel)
    assert(lessEight == "MINIMUM 8 CHARACTERS", `string ${lessEight} doesn't match with "MINIMUM 8 CHARACTERS" `)
  }

}

module.exports = SignInPage
