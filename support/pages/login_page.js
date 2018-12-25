// login_page.js
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

class LoginPage extends Page {
  // Selectors
  get signInButtonTWO () { return '[class="enrg-button enrg-button--large enrg-button--wide"]' }
  get mainContainer () { return '[class="enrg-app"]' }
  get signInPageTxt () { return '[class="enrg-header__title"]' }
  get emailfieldSel () { return '[name="username"]' }
  get passwordSel () { return '[name="password"]' }
  get loginButtSel () { return '[type="submit"]' }
  get totalTitleSel () { return '[class="enrg-dashboard__title"]' }

  // Elements
  get signInButton () { return this.browser.element(this.signInButtonTWO) }
  get emailTextFiled () { return this.browser.element(this.emailfieldSel) }
  get passwordField () { return this.browser.element(this.passwordSel) }
  get logInButton () { return this.browser.element(this.loginButtSel) }

  // Methodssss
  async navigateTologIn () {
    await super.open()
    await this.browser.waitForVisible(this.mainContainer, config.waitTime.long)
    await this.signInButton.click()
  }

  async login () {
    await this.browser.waitForVisible(this.signInPageTxt, config.waitTime.medium)
    await this.emailTextFiled.setValue(TestData.getUser('qa_user_1').email)
    await this.passwordField.setValue(TestData.getUser('qa_user_1').password)
    await this.logInButton.click()
  }

  async checkIfLoged () {
    await this.browser.waitForVisible(this.totalTitleSel, config.waitTime.medium)
    await this.browser.waitForText(this.totalTitleSel, config.waitTime.medium)
    let totalTitle = await this.browser.getText(this.totalTitleSel)
    assert.strictEqual(totalTitle[0], 'Total accumulated', `the string ${totalTitle[0]} does not mach "Total accumulated" `)
  }
}

module.exports = LoginPage
