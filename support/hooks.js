const { BeforeAll, Before, After } = require('cucumber')
const Logger = require('logplease')
const TestData = require('../util/test_data')
const BasePage = require('./pages/base_page')
const SignInPage = require('./pages/SignIn_page')
const CreateAccPage = require('./pages/CreateAccount')
const TransactionPage = require('./pages/transaction_page')
const ProfilePage = require('./pages/profile_page')
const HelpPage = require('./pages/help_page')
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

  // init page objects. At the mement when we creare a new page, we must add it here (ToDo: try to improve it)
  this.page = {}
  this.basePage = new BasePage(this)
  this.signInPage = new SignInPage(this)
  this.createAccPage = new CreateAccPage(this)
  this.transactionPage = new TransactionPage(this)
  this.profilePage = new ProfilePage(this)
  this.helpPage = new HelpPage(this)
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
