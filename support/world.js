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
      break;
    default:
      console.log('Browser parameter ' + parameters.browser + 'is wrong!')
  }


}

setWorldConstructor(CustomWorld)
