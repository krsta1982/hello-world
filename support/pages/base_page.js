const Page = require('./page')
const TestData = require('../../util/test_data')
const config = require('../../config/config')
const assert = require('assert')
const request = require('request-promise');

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay*1000);
}

class BasePage extends Page {

  // Selectors
  get totalTitleSel () { return '[class="enrg-dashboard__title"]' }
  get hamburgerBtnSell () { return '[class="enrg-button enrg-button--ghost enrg-button--large enrg-header__action"]' }
  get singOutSel () { return '[id="nav_5"]' }

  // Elements
  get hamburgerButton () { return this.browser.element(this.hamburgerBtnSell) }
  get signOutButton () { return this.browser.element(this.singOutSel) }

  // Methods
  
  async clickOnhamburger () {
    await this.hamburgerButton.click()
  }

  async checkIfLoged () {
    await this.browser.waitForVisible(this.totalTitleSel, config.waitTime.medium)
    await this.browser.waitForText(this.totalTitleSel, config.waitTime.medium)
    let totalTitle = await this.browser.getText(this.totalTitleSel)
    assert.strictEqual(totalTitle[0], 'Total accumulated', `the string ${totalTitle[0]} does not mach "Total accumulated" `)
  }

  async findSignOut () {
    await this.browser.waitForVisible(this.singOutSel, config.waitTime.medium)
    await this.browser.waitForText(this.singOutSel, config.waitTime.medium)
  }

  async signOut () {
    await this.signOutButton.click()
  }

  async api_call (api_uri, items, list_name = "") {

    //var api_url = TestData.data.api_url //take it from yaml file
    let api_url = 'http://18.184.156.139:8089/'
    var api_user = 'qa-partner'                  //take it from yaml file
    var api_pass = 'djlxb2vz1hnvhl46'            //take it from yaml file
    let res;
    let a_str;
    let count;

    // test if a call has a list
    if ("" != list_name) {
        // A call with a list        
        a_str = '{"' + list_name + '" : [{'
        // a_str = '{"" : [{'
        count = items[0].length
        for(let i=0; i < count-1; i++) {
            a_str += '"'+items[0][i]+'" : "'+items[1][i]+'",'
        }
        a_str += '"'+items[0][count-1]+'" : "'+items[1][count-1]+'" }]}'
    }
    else {
        // A call without a list
        a_str = '{'
        count = items[0].length
        for(let i=0; i < count-1; i++) {
            a_str += '"'+items[i]+'" : "'+items[1][i]+'",'
        }
        a_str += '"'+items[0][count-1]+'" : "'+items[1][count-1]+'" }'
    }

    console.log(a_str);
    let api_body = JSON.parse(a_str);

    try {
        res = await request({
            url: api_url + 'api/oauth/token',
            method: 'POST',
            auth: {
                user: api_user,
                pass: api_pass
            },
            form: {
                'grant_type': 'client_credentials'
            }
        });
    } catch(err) {
        console.log("*** Access Token call ERR ***", err.response.data);
    }  
    
    // console.log(res); 
    var json = JSON.parse(res);
    console.log("Access Token: ", json.access_token);

    try {
        res = await request({
            url: api_url + api_uri,
            resolveWithFullResponse: true,
            method: 'POST',
            auth: {
                'bearer': json.access_token
            },
            body: api_body,
            json: true
        });
    } catch(err) {
        console.log("*** API call ERR: " + api_uri + " ***", err.response.data);
    }  
    
    console.log(res.statusCode); 
    if (res.body)
        console.log(res.body);
  }

}

module.exports = BasePage
