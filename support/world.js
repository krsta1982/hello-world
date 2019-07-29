const { setWorldConstructor } = require('cucumber')
var webdriver = require('webdriverio')

function CustomWorld ({ attach, parameters }) {
  this.attach = attach
  this.parameters = parameters


  switch (parameters.browser) {
    case "chrome":
    case "firefox":
      const options = {
        desiredCapabilities: {
          browserName: parameters.browser
        }
      }
      this.browser = webdriver.remote(options)
      break;
    case "chrome-headless":
      const optionsH = {
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
      this.browser = webdriver.remote(optionsH)
      break;
    default:
      throw new Error('Browser parameter ' + parameters.browser + 'is wrong!')
  }

}

setWorldConstructor(CustomWorld)
