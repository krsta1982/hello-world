// login_page.js
const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')

class LoginPage extends Page {
  //Selectors
   get signInButtonTWO () {return '[class="enrg-button enrg-button--large enrg-button--wide"]'}
   get mainContainer () {return '[class="enrg-app"]'}
   get signInPageTxt(){return '[class="enrg-header__title"]'}
   

   //elements
   get signInButton () { return this.browser.element(this.signInButtonTWO) }
   
  // get createAccButton () {return browser.element('[class="enrg-button enrg-button--large enrg-button--wide enrg-button--primary"]')}
  // get emailField (){return browser.element('[name="username"]')}
  // get passwordField () {return browser.element(['name="password"'])}
  // get logInButton () {return browser.element(['type="submit"'])}

  //Methodssss
  async logIn(){
    await super.open()
      await this.browser.waitForVisible(this.mainContainer, config.waitTime.long)
      await this.signInButton.click()
      await this.browser.waitForVisible(this.signInPageTxt, config.waitTime.medium)
      // await this.emailField.setValue(TestData.users.qa_user_1.email)
      // await this.passwordField.setValue(TestData.users.qa_user_1.password)
      // await this.logInButton.click()
  }


}

module.exports = LoginPage
