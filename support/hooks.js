const { BeforeAll, Before, After } = require('cucumber')
const Logger = require('logplease')
const TestData = require('../util/test_data')
const LoginPage = require('./pages/login_page')
const CreateAccPage = require('./pages/createAcc_page')
const TransactionPage = require('./pages/transaction_page')
const ProfilePage = require('./pages/profile_page')
const HelpPage = require('./pages/help_page')
const SignOut = require('./pages/signOut')
const ResetPassword = require('./pages/resetPassword')

let testData

const logger = Logger.create(
  'energyDashboard',
  { filename: 'energyDashboard.log', appendFile: true }
)

BeforeAll(async function () {
  logger.info('Initialize test run...')
})

Before(async function (scenario) {
  this.logger = logger
  await this.browser.init()

  // init page objects
  this.page = {}
  this.loginPage = new LoginPage(this)
  this.createAccPage = new CreateAccPage(this)
  this.transactionPage = new TransactionPage(this)
  this.profilePage = new ProfilePage(this)
  this.helpPage = new HelpPage(this)
  this.signOut = new SignOut(this)
  this.resetPassword = new ResetPassword(this)

  if (!testData) {
    // init test data
    logger.info(`parameters: ${JSON.stringify(this.parameters)}`)
    TestData.load(this.parameters.environment)
    testData = TestData.data
  } else {
    logger.debug('Test data already initialized!')
  }

  this.testData = testData

  this.logger.info(`Start test: ${scenario.pickle.name}`)
})

After(async function (scenario) {
  this.logger.info(`Scenario '${scenario.pickle.name}' ${scenario.result.status}!`)
  await this.browser.end()
})
