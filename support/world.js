const { setWorldConstructor } = require('cucumber')
var webdriver = require('webdriverio')

function CustomWorld ({ attach, parameters }) {
  this.attach = attach
  this.parameters = parameters

  const options = {
    desiredCapabilities: {
      browserName: 'chrome',
      chromeOptions: {
          args: [
              '--headless',
              '--no-sandbox',
              '--disable-gpu'
          ]
      }
    }
  }
  this.browser = webdriver.remote(options)
}

setWorldConstructor(CustomWorld)
