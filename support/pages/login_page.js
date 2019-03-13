// login_page.js
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class LoginPage extends Page {
  
  // Selectors
  get signInButtonSel () { return '[class="enrg-button enrg-button--large enrg-button--wide"]' }
  get mainContainer () { return '[class="enrg-app"]' }
  get signInPageTxt () { return '[class="enrg-header__title"]' }
  get emailfieldSel () { return '[name="username"]' }
  get passwordSel () { return '[name="password"]' }
  get loginButtSel () { return '[type="submit"]' }

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
}

module.exports = LoginPage
