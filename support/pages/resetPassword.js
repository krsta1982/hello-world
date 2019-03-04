// resetPassword.js
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay*1000);
}

class ResetPassword extends Page {
    // Selectors
  get signInButtonTWO () { return '[class="enrg-button enrg-button--large enrg-button--wide"]' }
  get mainContainer () { return '[class="enrg-app"]' }
  get signInPageTxt () { return '[class="enrg-header__title"]' }
  get resetBtnSel () { return '[class="enrg-link"]' }
  get totalTitleSel () { return '[class="enrg-dashboard__title"]' }
  get resetTitle () { return '[class="enrg-header"]' }
  get emailSel () { return '[name="email"]' }
  get continueBtnSel () { return '[class="enrg-button enrg-button--primary enrg-button--full enrg-button--large"]' }

    // Elements
  get signInButton () { return this.browser.element(this.signInButtonTWO) }
  get resetButton () { return this.browser.element(this.resetBtnSel) }
  get emailField () { return this.browser.element(this.emailSel) }
  get continueButton () { return this.browser.element(this.continueBtnSel)}

  // Methodssss
  async navigateTologIn () {
    await super.open()
    await this.browser.waitForVisible(this.mainContainer, config.waitTime.long)
    await this.signInButton.click()
  }

  async reset () {
      await this.browser.waitForVisible(this.resetBtnSel, config.waitTime.medium)
      await this.browser.waitForText(this.resetBtnSel, config.waitTime.medium)
      await this.resetButton.click()
      sleep(2)
  }

  async enterEmail () {
      await this.browser.waitForVisible(this.resetTitle, config.waitTime.medium)
      await this.emailField.setValue(TestData.getUser('qa_user_4').email)
      await this.continueButton.click()
      sleep(2)
  }

  async checkReset () {
      await this.browser.waitForVisible(this.resetTitle, config.waitTime.medium)
      await this.browser.waitForText(this.resetTitle, config.waitTime.medium)
      let titleReset = await this.browser.getText(this.resetTitle)
    //   assert.strictEqual(titleReset, 'Total', `the string ${titleReset} does not match "Total" `)
  }
}

module.exports = ResetPassword