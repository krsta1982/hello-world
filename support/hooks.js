

const {BeforeAll, Before, After} = require('cucumber')
const Logger = require('logplease')
const TestData = require('../util/test_data')
const CreateAccPage = require('./pages/createAcc_page')

let testData

const logger = Logger.create('energyDashboard', {
    filename: 'energyDashboard.log', appendFile: true
})

BeforeAll(async function () {
    logger.info('Initialize test run...')
})

Before(async function(scenario) {
    this.logger = logger
    await this.browser.init()


    this.page = {}
    this.createAccPage = new CreateAccPage(this)

    if (!testData) {
        logger.info(`parameters: ${JSON.stringify(this.parameters)}`)
        TestData.load(this.parameters.environment)
        testData = TestData.data

    } else {
        logger.debug('Test data already initialized!')
    }

    this.testData = testData

    this.logger.info(`Start tests: ${scenario.pickle.name}`)
})

After(async function(scenario) {
    this.logger.info(`Scenario '${scenario.pickle.name}' ${scenario.result.status}!`)
    await this.browser.end()
})