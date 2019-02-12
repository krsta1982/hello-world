
const {Given, When, Then} = require('cucumber')
const createAccPage = require('../support/pages/createAcc_page')


   When('I enter the username, password, reapet password, city and nickname', {timeout: 20000}, async  function () {
           // Write code here that turns the phrase above into concrete actions
            await this.createAccPage.navigateToCreateAccount()
            await this.createAccPage.createAccount()
         });
   

    
   Then('I should be able to create account', {timeout: 30000}, async function () {
           // Write code here that turns the phrase above into concrete actions
           await this.createAccPage.checkIfCreate()
         });
