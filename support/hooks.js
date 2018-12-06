import { BeforeAll, Before, After, AfterAll } from 'cucumber'
import  Logger from 'logplease'


client = {}
const logger = Logger.create(
  'test',
  { filename: 'smarttest.log', appendFile: true }
)

BeforeAll(async function () {
  
})

Before(async function () {
  client.mainPage = new MainPage(webdriver)
  client.homePage = new HomePage(webdriver)
  this.client = client
})

After(async function () {
  
})

AfterAll(async function () {
  
})
